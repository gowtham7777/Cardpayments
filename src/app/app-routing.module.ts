import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { CardsComponent }   from './cards/cards.component';
 import { PaymentsComponent } from './payments/payments.component';
import { AppForms } from './appForms/appForms.component';
import { CommitmentsConfirmedChartComponent } from './components/charts/commitments-confirmed-chart/commitments-confirmed-chart.component';
import { MfdashboardComponent } from './components/mfdashboard/mfdashboard.component';
import { MfCommitmentsComponent } from './components/mf-commitments/mf-commitments.component';
import { AppPdfGenComponent } from './app-pdf-gen/app-pdf-gen.component';
import { StudendInfoComponent } from './studend-info/studend-info.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
//import { FormsComponent } from './forms/forms.component';
 // import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'cards', component: CardsComponent },
   { path: 'payments', component: PaymentsComponent },
   { path: 'forms', component: AppForms },
   { path: 'pdf', component:  AppPdfGenComponent},
   { path: 'students', component:  StudendInfoComponent},
   { path: 'dashboard', component:  MfdashboardComponent},
   { path: 'commitments', component: MfCommitmentsComponent },
      // { path: 'diffForms', component:  FormsComponent,
      //     children : [ { path: 'newUser', component:  TemplateDrivenFormsComponent},
      //                  { path: 'forms', component:  AppForms} 
      //                ]
      // },
   
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