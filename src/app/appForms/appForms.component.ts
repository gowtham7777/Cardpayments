import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement } from '../model/PeriodicElement';
import { PaymentService } from '../services/payments.service';
import { MatTableDataSource, MatSort } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-forms',
  templateUrl: './appForms.component.html',
  styleUrls: ['./appForms.component.scss']
})

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
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
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  createTable() {
    this.dataSource = new MatTableDataSource(this._paymentService.activePromotions);
    this.dataSource.sort = this.sort;
  }
 }
