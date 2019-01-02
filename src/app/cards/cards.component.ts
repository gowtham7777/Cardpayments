import { Component, OnInit } from '@angular/core';
import {Payment} from '../model/payment';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  payments: Payment[] = [];
  showEditView: Boolean = false;
  showNewItem: Boolean = false;
  selectedPayment: Payment;
  payment: Payment = {
    id: 1,
    amount: 100,
    paymentCode: "MXLS",
    paymentDesc: "Test Description",
    startDate: new Date("12/12/1900")
  };

  paymentArray: Payment[] = [{
    id: 1,
    amount: 100,
    paymentCode: "MXLS",
    paymentDesc: "Test Description",
    startDate: new Date("12/12/1900")
  },
  {
    id: 2,
    amount: 200,
    paymentCode: "RSTL",
    paymentDesc: "REST  Description",
    startDate: new Date("11/11/1900")
  }];

  

  constructor() { }

  ngOnInit() {
    this.payments = this.paymentArray;
    this.payments.push(this.payment);
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
