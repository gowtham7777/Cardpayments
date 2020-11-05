import { Component, OnInit, ElementRef, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { Chart,ChartDataSets,ChartOptions,ChartType} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as ChartAnnotation  from 'chartjs-plugin-annotation';
import { Commitments } from 'src/app/model/commitments';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-commitments-confirmed-chart',
  templateUrl: './commitments-confirmed-chart.component.html',
  styleUrls: ['./commitments-confirmed-chart.component.css']
})
export class CommitmentsConfirmedChartComponent implements OnInit {

  @ViewChild("myChart") canvasChart: ElementRef;
  context:CanvasRenderingContext2D;
  @Input()
  public chartName:String;
  @Input()
  public highlightedValue:String;

  @Input()
  public chartData:number[] ; 
  public showChart:Boolean = false;
  @Input()
  public positiveData:Boolean = false;
  @Input()
  public commitmentsConfirmedChart:Boolean;
  @Input()
  public confirmedUpb:Boolean;
  @Input()
  public cleanRateChart:Boolean;
  @Input()
  public ccWithSLAChart:Boolean;
  @Input()
  public avgCleanRate:Number;
  @Input()
  public selectedDuration:Commitments;
  @Input()
  public duration:String;
  @Input() 
  public chartValuesMf:Observable<Commitments>;

  private eventsSubscription: Subscription;

  public datasetOverride:any;

   @Input()
   public goalValue:String;
  
  
  public lineChartData: any = [];
  public lineChartLabels: Label[] = ['', '', '', '', '', '', '','','','','',''];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio :false,
    scaleShowLabels : false,
    animation: {
      duration: 0
  },
    elements: {
      point:{
          radius: 0
      }
  },
    scales:
      {
          yAxes: [{

              gridLines : {
                  display : false,
                  drawOnChartArea: false
              },
              ticks: {
                display: false
            }
          }],
          xAxes: [{
            gridLines : {
                display : false,
                drawOnChartArea: false
            }
        }]
 },
   
 annotation: {
  annotations: [{
    drawTime: 'afterDatasetsDraw',
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
     // value: 0,
      borderColor: '#DEDEDE',
      borderWidth: 3,           
  }]
},  
    
  };
  public gradientStroke:any;
  public lineChartColors: Color[] = [
    {
     borderColor: '#87ceeb',
     backgroundColor: 'rgba(128, 182, 244, 0.6)'//this.gradientStroke,//'linear-gradient(180deg, rgba(73, 170, 230, 0.31) 12.44%, rgba(73, 170, 230, 0) 100.32%)',
   },
  ];//linear-gradient(180deg, rgba(73, 170, 230, 0.31) 12.44%, rgba(73, 170, 230, 0) 100.32%);
  public chartColor:any = {
    borderColor: '#87ceeb',
    backgroundColor: 'rgba(128, 182, 244, 0.6)'
  };
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [ChartAnnotation];

  constructor() { }

  ngOnInit() {
  
     if(this.lineChartOptions.annotation.annotations.length>0)
     this.lineChartOptions.annotation.annotations[0].value = this.avgCleanRate;
    this.lineChartData[0] = {data:this.chartData,pointRadius: 0};
    
    this.refreshChartNewValues();
    console.log(this.chartName + "  page is " + this.chartData)
    if(this.chartData)
    this.showChart = true;
    //this.eventsSubscription = this.chartValuesMf.subscribe((event) => this.updateChartValues(event));
    }

    

    public updateChartValues(event:any)
    {
     // this.lineChartData[0] = {data:event.cleanRate};// this.lineChartData[0] = {data:this.chartData};
     
      this.lineChartData[0] = {data:event.ccWithSLA}; 

      if(this.chartName==="Commitments Confirmed")
           this.lineChartData[0] = {data:event.commitmentsConfirmed};
         if(this.chartName==="Confirmed Peas"){
            var arrayOfNumbers = event.confirmedUPB.map((item:String)=>{ return item.substring(1,item.length-2);});
            this.lineChartData[0] = {data:arrayOfNumbers.map(Number)};
         }
         if(this.chartName==="Clean Rate")
            this.lineChartData[0] = {data:event.cleanRate};
       //  if(this.chartName==="Commitments Confirmed Smart")
       //     this.lineChartData[0] = {data:event.ccWithSLA}; // confirmedSLA
            console.log(this.chartName);
            console.log(this.lineChartData[0]);
            this.refreshChartNewValues();
}
     

    public refreshChartNewValues(){
      
      if(this.canvasChart!==undefined){
      const ctx:any = (<HTMLCanvasElement>this.canvasChart.nativeElement).getContext('2d');
      
      const bar_chart = new Chart(ctx, {
                type: "line",
                
               options:
              {
                legend: {
                  display: false
               },
                responsive: true,
                maintainAspectRatio :false,
                elements: {
                  point:{
                      radius: 0
                  }
              },
              scales:
              {
                  yAxes: [{
                      gridLines : {
                          display : false,
                          drawOnChartArea: false
                      },
                      ticks: {
                        display: false
                    }
                  }],
                  xAxes: [{
                    gridLines : {
                        display : false,
                        drawOnChartArea: false
                    }
                }]
         },
         plugins: {
            annotation: {
              annotations: [{
              drawTime: 'afterDatasetsDraw',
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y-axis-0',
              borderColor: '#DEDEDE',
              borderWidth: 3,           
          }]
        }
      }, 

        },
                data: {labels: ["", "", "", "","","", "", "", "","", "", ""],
                
                datasets: [
                {label: "",data: this.lineChartData[0].data,
                borderColor: '#87ceeb',
                backgroundColor: 'rgba(128, 182, 244, 0.6)'
            }]}});

    }
}
}
