import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { CardsComponent }   from './cards/cards.component';
 import { PaymentsComponent } from './payments/payments.component';
import { AppForms } from './appForms/appForms.component';
import { AppPdfGenComponent } from './app-pdf-gen/app-pdf-gen.component';
 // import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'payment', pathMatch: 'full' },
    { path: 'cards', component: CardsComponent },
   { path: 'payments', component: PaymentsComponent },
   { path: 'forms', component: AppForms },
   { path: 'pdf', component:  AppPdfGenComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/