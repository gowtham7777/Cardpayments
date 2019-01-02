import { Component, OnInit, Input } from '@angular/core';
import {Payment} from '../../model/payment';
@Component({
  selector: 'app-cards-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() selectedPayment: Payment;

  payments: Payment[] = [];
  showEditView: Boolean = false;
  showNewItem: Boolean = false;
  displayContent: Boolean = false;
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
  onAdd():void{
    this.showNewItem = !this.showNewItem;
  }

  hideAddComponent():void{//cancel button is clicked
    this.showNewItem = !this.showNewItem;
  }
  
  onEdit(payment):void{ // on edit button is clicked, edit the values should show in display view too.
  this.showEditView = !this.showEditView;
  this.displayContent = !this.displayContent;
  }
  
  cancelEditView():void{ //only when edit view is not needed
    this.showEditView = !this.showEditView;
    this.displayContent = !this.displayContent;
  }
  
  onNewItemAdded():void{
  
  }
  showEditDisplay():void{
    this.showEditView = !this.showEditView;
  }

}
