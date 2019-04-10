import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-app-pdf-gen',
  templateUrl: './app-pdf-gen.component.html',
  styleUrls: ['./app-pdf-gen.component.scss']
})
export class AppPdfGenComponent implements OnInit {

  doc:any;
  dmDate:String;
  supplierCreditAmount:Number = 0;
   cmColumns:Object  = [{title: "Date", dataKey: "date"}, 
                    {title: "Memo Number", dataKey: "Num"},
                    {title: "Amount", dataKey: "amount"}];
  
     adjColumns:Object = [{title: "CODE", dataKey: "code"}, 
                    {title: "REASON FOR DISCREPANCY", dataKey: "description"},
                    {title: "DOLLARS", dataKey: "dollars"}];
  constructor() { }

  ngOnInit() {
  }

  generatePdf(){

    this.doc = new jsPDF('p','pt');
    this.doc.setFont("Arial");
    this.doc.setFontSize(12);
    this.dmDate = "11/12/1900";
  
    this.doc.text("COMPANY APPROVAL / PAYMENT FORM", 18, 15);
  
    //this.doc.addImage(imgData, 'JPEG', 18, 20, 50, 15);
  
    this.doc.text("Supplier Name", 18, 45);
   // this.doc.text("SUPPLIER", 60, 45);
    this.doc.line(60, 47, 185, 47);
  
    this.doc.text("Invoice Number", 18, 53);
   // this.doc.text("78393233G", 60, 53);
    this.doc.line(60, 55, 105, 55);
  
     this.doc.text("Contact Phone#", 120, 53);
    // this.doc.text("559-289-1783", 150, 53);
     this.doc.line(150, 55, 185, 55);
  
     this.doc.text("Invoice Date", 18, 60);
    // this.doc.text("11/12/1980", 60, 60);
     this.doc.line(60, 62, 105, 62);
  
     this.doc.text("Fax Number", 120, 60);
    // this.doc.text("", 150, 60);
     this.doc.line(150, 62, 185, 62);
  
    this.doc.text("Email Address", 18, 67);
  //  this.doc.text("", 60, 67);
    this.doc.line(60, 69, 185, 69);
  
     
    
  
    var cmData = [];
    var adjData = [];
  
    // this.doc.autoTable({
    //     columnStyles: {1: {halign: 'right'}},
    //     margin: {top: 80},
    //     font: 'Arial',
    //     body: [
    //         ['Return Invoice Deduction Amount', "4399893"],
    //         ['Total Amount of Supplier Credit', 23423424],
    //         ['Variance (repayment amount requested)', 2344242],
    //     ]
    // });
    
    // this.doc.autoTable(this.cmColumns, cmData, {
    //     font: 'Arial'
    // });
    // this.doc.autoTable(this.adjColumns, adjData, {
    //     font: 'Arial'
    // });
    
  
    this.doc.save("pdfName" + '.pdf');
  }
}
