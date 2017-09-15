import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomepageComponent }   from './homepage/app.homepage.compoent';
import { AppManageStoreComponent }   from './managestore/app.managestore.compoent';
import { AppStoreComponent }   from './store/app.store.compoent';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage',  component: AppHomepageComponent },
  { path: 'store/:name',  component: AppStoreComponent },
  { path: 'managestore',  component: AppManageStoreComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
