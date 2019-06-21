import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {      
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatTableModule,
  MatSortModule,
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher      
} from '@angular/material';     

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardsComponent } from './cards/cards.component';
import { DisplayComponent } from './cards/display/display.component';
import { PaymentsComponent } from './payments/payments.component';
import { AppForms } from './appForms/appForms.component';
import { AppPdfGenComponent } from './app-pdf-gen/app-pdf-gen.component';
import { StudendInfoComponent } from './studend-info/studend-info.component';
import { studentService } from './services/studentService';
import { PaymentService } from './services/payments.service';
import { UpdateTotalService } from './services/updateTotal.service';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    PaymentsComponent,
    DisplayComponent,
    AppForms,
    AppPdfGenComponent,
    StudendInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,  
    BrowserAnimationsModule,    
    HttpClientModule,
  MatMenuModule,       
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatTableModule,
  MatSortModule,
  MatSlideToggleModule    
  ],
  providers: [      studentService, PaymentService, UpdateTotalService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}      
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
