import { Component } from '@angular/core';
import {jsPDF} from 'jspdf';
import { ExecutiveComTrendsService } from './services/executive-com-trends.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'AngCharts';
  hrs: any[] = [];
  public commitmentsConfirmed:number[]   =  [1,2,3,4,5,6,7,8];
  public cleanRate:number[]   =  [8,7,6,5,4,3,2,1];
  public confirmedUPB:number[]   =  [12, 13, 4, 13,1,8,12];
  public ccWithSLA:number[]   =  [34,55,12,7,67,89,22,65];


  constructor(private exService: ExecutiveComTrendsService) {
  }
 
  
  ngOnInit(): void {
    // this.exService.getExecutiveDetails().subscribe(res => {
    //    this.hrs = res;
    // });
  
  } 
 
}
