import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement } from '../model/PeriodicElement';
import { PaymentService } from '../services/payments.service';
//import { MatTableDataSource, MatSort } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-forms',
  templateUrl: './appForms.component.html',
  styleUrls: ['./appForms.component.scss']
})

export class AppForms implements OnInit {

  constructor (private _paymentService: PaymentService){}
  dataSource;
  columnNames = [{
    id: "position",
    value: "No."

  }, {
    id: "name",
    value: "Name"
  },
  {
    id: "weight",
    value: "Weight"
  },
  {
    id: "symbol",
    value: "Symbol"
  }];
  displayedColumns = [];
  //@ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  createTable() {
  //  this.dataSource = new MatTableDataSource(this._paymentService.activePromotions);
  //  this.dataSource.sort = this.sort;
  }
 }
