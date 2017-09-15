import { Injectable } from '@angular/core';
import { Store } from './store';

import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoreService {
  
  stores:Store[] = [];
  
  storename:String
  store:Store = null;

  user: Observable<firebase.User>;
  fbObj: FirebaseObjectObservable<any>;
  fbList: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    
    this.afAuth.auth.signInAnonymously();     
  }



   getStores(): Store[]{

    this.fbList = this.af.list('/Stores', { preserveSnapshot: true }); 
     this.fbList.subscribe(snapshots => {
    
          snapshots.forEach(snapshot => {
          
          // snapshot.key; ||  snapshot.val();
          var fbstore = snapshot.val();
          var store = new Store(fbstore);
          this.stores.push(store);
                  
           });  
           
           // Enter binding Fb to Store[]
           console.log( this.stores);
           
        })
    
        return (this.stores);
  
  }

  getStore(): Store{

    var stores:Store[] = [];

    this.fbList = this.af.list('/Stores', { preserveSnapshot: true }); 
    this.fbList.subscribe(snapshots => {
   
         snapshots.forEach(snapshot => {
         
         // snapshot.key; ||  snapshot.val();
         var fbstore = snapshot.val();
         var store = new Store(fbstore);
         stores.push(store);
                 
          });  
          
          // Enter binding Fb to Store[]
          console.log( this.stores);
          
       })

    return stores[0];
  }
}
