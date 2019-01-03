import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Payment} from '../../model/payment';

@Component({
  selector: 'app-cards-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() 
  selectedPayment: Payment;

  @Output() 
  savePayment:EventEmitter<any> = new EventEmitter();

  newPayment: Payment = {} as Payment; // when new item is added
  payments: Payment[] = []; //
  showEditView: Boolean = false;
  showNewItem: Boolean = false;
  displayContent: Boolean = false;
  payment: Payment;
  amount:number;

  constructor() { }

  ngOnInit() {
   // this.payments = this.paymentArray;
    this.payments.push(this.payment);
    //this.newPayment = {} ;
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
  
  onNewItemAdded():void{//on edit submission.
    this.showEditView = !this.showEditView;
    this.savePayment.emit(this.selectedPayment);
  }
  showEditDisplay():void{
    this.showEditView = !this.showEditView;
  }

  addNewRow():void{
    if(this.amount<0)return;
    this.showNewItem = !this.showNewItem;
    this.newPayment.amount = this.amount;
    this.newPayment.paymentCode = "KXIP";
    this.newPayment.paymentDesc = "Miscellesous Item";
    this.savePayment.emit(this.newPayment);
  }

}
