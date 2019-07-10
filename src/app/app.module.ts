import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material_modules/material.module';
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
import { AppErrorHandler }     from './app-error-handler';
import { MessageService }       from './message.service';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    PaymentsComponent,
    DisplayComponent,
    AppForms,
    AppPdfGenComponent,
    StudendInfoComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,    
    HttpClientModule,
    MaterialModule
  ],
  providers: [  MessageService, AppErrorHandler,studentService, PaymentService, UpdateTotalService
        
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
