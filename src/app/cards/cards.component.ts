import { Component, OnInit } from '@angular/core';
import {Payment} from '../model/payment';
import { Subscription } from 'rxjs';
import { UpdateTotalService } from '../services/updateTotal.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  //payments: Payment[] = [];
  subscription:Subscription;
  showEditView: Boolean = false;
  showNewItem: Boolean = false;
  selectedPayment: Payment;
  totalPayment:Number;
  // payment: Payment = {
  //   id: 1,
  //   amount: 100,
  //   paymentCode: "GLPS",
  //   paymentDesc: "Gold Rendered",
  //   startDate: new Date("12/1/2010")
  // };

  payments: Payment[] = [new Payment(1,100,"MXLS","Test Description", new Date("12/12/2012")),
  new Payment(2,200,"RSTL","REST Description", new Date("11/11/2010")),
  new Payment(1,100,"MIND","MUMBAI Description", new Date("5/2/2013"))
 ];

  

  constructor(private updateTotalService:UpdateTotalService) {

    this.subscription = this.updateTotalService.getMessage().subscribe(message => {
      if (message) {
     this.payments.push(message);
     this.caluclateTotalPayments();
      } else {
        this.payments = [];
      }
    });
   }

  ngOnInit() {
    //this.payments = this.paymentArray;
   // this.payments.push(this.payment);
    //this.totalPayment = this.payments.map(payment => payment.amount)
    this.caluclateTotalPayments()
    console.log(this.totalPayment);
  }

//The reducer function takes four arguments:
//Accumulator (acc) Current Value (cur) Current Index (idx) Source Array (src)
  caluclateTotalPayments(){
    this.totalPayment= this.payments.reduce((total, payment) => total as number + payment.amount as number,0); 
    }

  addNewDisplayItem(event){
    console.log(event)
    this.payments.push(event);
    this.caluclateTotalPayments();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  // onAdd():void{
  //   this.showNewItem = !this.showNewItem;
  // }

  // onEdit(payment):void{
  // this.showEditView = !this.showEditView;
  // }
  // onNewItemAdded():void{
  
  // }
  // showEditDisplay():void{
  //   this.showEditView = !this.showEditView;
  // }

}
