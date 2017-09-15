import 'rxjs/add/operator/switchMap';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from './store';

import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-store',
  templateUrl: './app.store.component.html'
})
export class AppStoreComponent implements OnInit{

  store:Store;
  paramname:String;
  fbList: FirebaseListObservable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase
  ) { this.afAuth.auth.signInAnonymously();  }

  ngOnInit(){
   
    
    this.fbList = this.af.list('/Stores', { preserveSnapshot: true }); 

    // Get param in header
    this.route.paramMap.switchMap((params: ParamMap) => this.paramname = params.get("name")).subscribe();

    this.fbList.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
       // snapshot.key; ||  snapshot.val();
        var fbstore = snapshot.val();
        if(fbstore.name == this.paramname)
        {  this.store = new Store(fbstore); }
                  
      });                     
    })
    
  }
  
  goBack(): void {
    this.location.back();
  }

 
  
}
