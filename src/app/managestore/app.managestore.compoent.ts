import { Component , OnInit} from '@angular/core';
import { Store } from '../store/store';

import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';

import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-managestore',
  templateUrl: './app.managestore.component.html'
})
export class AppManageStoreComponent implements OnInit{

  iscreatestore = false;
  paycuiseUser;
  newstore:Store;

  fbList: FirebaseListObservable<any[]>;

  constructor(
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
    private _cacheService: CacheService) 
   {  
    this.afAuth.auth.signInAnonymously(); 
    
      this.paycuiseUser = this._cacheService.get('paycuiseUser');  
    
      var emptystore: {[k: string]: any} = {};

      emptystore.name = "";
      emptystore.detail = "";
      emptystore.picurl = "";
      emptystore.owner = "";
      this.newstore = new Store(emptystore)
    }

  ngOnInit(){
    
  }

  onClickNewStore(): void {

    this.iscreatestore = true;

    
  }

  onClickback(): void {
    
        this.iscreatestore = false;
    
        
      }

  
  createNewStore(): void {
    
    console.log(this.newstore)
    this.newstore.owner = this.paycuiseUser.email;
     
    var store = new Store(this.newstore); 

    this.fbList = this.af.list('/Stores', { preserveSnapshot: true }); 
    this.fbList.push(store);
   
    console.log(store)
    
    this.iscreatestore = false;
    }

}
