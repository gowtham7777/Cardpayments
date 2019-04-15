import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Payment} from '../../model/payment';
import { UpdateTotalService } from '../../services/updateTotal.service';

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
  id:number = 100;
  selectedAdj: Object = null;
  adjustments:Object[] =  [
          { value: null, text: 'No Value' },
          { value: 'KXIP', text: 'kings' },
          { value: 'MI', text: 'Mumbais' },
          { value: { C: '3PO' }, text: 'captains' },
          { value: 'CSK', text: 'super kings', disabled: true }
        ]

  constructor(private updateTotal:UpdateTotalService) { }

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
    this.newPayment.id = 12;
    this.newPayment.paymentCode = "KXIP";
    this.newPayment.paymentDesc = this.selectedAdj as string;
   // this.savePayment.emit(this.newPayment);
    this.updateTotal.sendMessage( new Payment(this.id++,this.amount,"RSTL",this.selectedAdj as string, new Date("11/11/2010")));
  }

}
