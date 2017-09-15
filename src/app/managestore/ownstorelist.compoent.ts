import { Component , OnInit} from '@angular/core';

import { Store } from '../store/store';

import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';

import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'ownstorelist',
    templateUrl: './ownstorelist.component.html'
  })

  export class OwnStoreListComponent implements OnInit{
    

    iseditstore:boolean = false;
    store:Store;
    comfirmname:String = null;
    comfirmname_type:String = "";
    comfirmname_err:String = "";

    ownstores:Store[] = [];
    fbList: FirebaseListObservable<any[]>;
    value: FirebaseObjectObservable<any>;
    paycuiseUser;

      constructor(
        public afAuth: AngularFireAuth,
        public af: AngularFireDatabase,
        private _cacheService: CacheService
      ) 
       { 
           this.afAuth.auth.signInAnonymously(); 
        
           this.paycuiseUser = this._cacheService.get('paycuiseUser');
        }
    
      ngOnInit(){
        
        this.fbList = this.af.list('/Stores', { preserveSnapshot: true }); 
        this.fbList.subscribe(snapshots => {

            this.ownstores = []
          snapshots.forEach(snapshot => {
           
           // snapshot.key; ||  snapshot.val();
            var fbstore = snapshot.val();
            var key = snapshot.key;
            var store = new Store(fbstore); 
            store.setKey(key);
            console.log( this.paycuiseUser);
            console.log( this.paycuiseUser.email);
            if(fbstore.owner == this.paycuiseUser.email){
                this.ownstores.push(store);           
            }
          
          });                     
        })

      }
  
      onClickDeleteStore(store:Store):void {
        this.comfirmname = store.name;
        this.store = store;
      }

      onClickback(): void {
        
       this.iseditstore = false;
      }

      updateStore(): void {
      
       this.fbList = this.af.list('/Stores', { preserveSnapshot: true }); 
       this.value = this.af.object('/Stores/'+ this.store.id);
       this.value.update(this.store).then(_ => { console.log('update!');  this.iseditstore = false;});
      

      }


      onClickEditStore(store:Store):void {
        this.store = store;
        this.iseditstore = true;
      }


      onClickConfirmDelete():void {
        if(this.comfirmname === this.comfirmname_type)
          {

            this.fbList = this.af.list('/Stores', { preserveSnapshot: true }); 
            this.value = this.af.object('/Stores/'+ this.store.id);
            this.value.remove().then(_ => console.log('deleted!'));

           
            $('deleteModal').modal('hide');
            
            this.comfirmname = null;
           
          }else
          {
            this.comfirmname_err = "confirm text don't match "

          }
      }
    }
    