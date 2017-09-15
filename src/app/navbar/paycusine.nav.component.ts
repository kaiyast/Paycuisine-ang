import { Component } from '@angular/core';

import { AuthResponse,FacebookService, InitParams,LoginOptions,LoginResponse } from 'ngx-facebook';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';

import * as myGlobals from '../globals'; 

@Component({
  selector: 'paycusine-nav',
  templateUrl: './paycusine.nav.component.html'
})

export class PaycuisineNavComponent {

  loginStatus:Boolean = false;
  paycuiseUser;


  constructor(
    private fb: FacebookService,
    private _cacheService: CacheService
  ) 
   { 
      
    let initParams: InitParams = {
      appId: '1739946682925584',
      xfbml: true,
      version: 'v2.8',
      cookie: true,
      status: true
    };
 
    fb.init(initParams);

    //put some data to cache for 1 hour (expires - timestamp with milliseconds)
    this._cacheService.set('key', {'some': 'data'}, {expires: Date.now() + 1000 * 60 * 60});
    
    // check login detail exist 
    if(!this._cacheService.exists('key'))
    {
      this._cacheService.set('loginStatus', false);
      this._cacheService.set('paycuiseUser', false);          
    }
    
    this.loginStatus = this._cacheService.get('loginStatus');
    this.paycuiseUser = this._cacheService.get('paycuiseUser');

  }

  loginWithFacebook(): void {
    
          // login with options
      const options: LoginOptions = {
        scope: 'public_profile,user_friends,email,pages_show_list',
        return_scopes: true,
        enable_profile_selector: true
      };
    
       this.fb.login(options)
         .then((response: LoginResponse) => {

          console.log(response.authResponse)
         
          this.fb.api("me?fields=id,name,email").then(res => {
            this.paycuiseUser = res;
            this.loginStatus = true;

            this._cacheService.set('loginStatus', this.loginStatus);
            this._cacheService.set('paycuiseUser',  this.paycuiseUser);    

          });


         })
         .catch((error: any) => console.error(error));
    
     }

     logoutWithFacebook(): void {
        this.fb.logout().then(() => {
        this.loginStatus = false;
        this._cacheService.set('loginStatus', this.loginStatus);
        this._cacheService.set('paycuiseUser',  null);    
        
        console.log('Logged out!')});
     }
}