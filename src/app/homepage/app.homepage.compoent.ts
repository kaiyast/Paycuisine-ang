import { Component , OnInit} from '@angular/core';

import { Store } from '../store/store';

import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-homepage',
  templateUrl: './app.homepage.component.html'
})
export class AppHomepageComponent implements OnInit{

  stores:Store[] = [];
  fbList: FirebaseListObservable<any[]>;

  constructor(
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
  ) 
   { this.afAuth.auth.signInAnonymously();  
      
  }

  ngOnInit(){

    this.fbList = this.af.list('/Stores', { preserveSnapshot: true }); 
    this.fbList.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
       
       // snapshot.key; ||  snapshot.val();
        var fbstore = snapshot.val();
        var store = new Store(fbstore); 
        this.stores.push(store);       
      });                     
    })
   
//this.loginWithFacebook();
    
  }


 
  
}
