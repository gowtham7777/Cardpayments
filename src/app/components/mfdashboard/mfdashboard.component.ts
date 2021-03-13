import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ExecutiveComTrendsService } from 'src/app/services/executive-com-trends.service';
import { Commitments } from 'src/app/model/commitments';
import { DatePipe } from '@angular/common';
import { CommitmentsConfirmedChartComponent } from '../charts/commitments-confirmed-chart/commitments-confirmed-chart.component';
import { Chart } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-mfdashboard',
  templateUrl: './mfdashboard.component.html',
  styleUrls: ['./mfdashboard.component.css']
})
export class MfdashboardComponent implements OnInit {

  title = 'AngCharts';
  hrs: any[] = [];
  public commitmentsConfirmed: number[] = [];
  public cleanRate: number[] = [12, 7, 6, 5, 4, 3, 2, 1, 9, 10, 11, 12];
  public confirmedUPB: string[] = ["$89B", "$13B", "$4B", "$13B", "$1B", "$8B", "$12B", "$34B", "$89B", "$12B", "$56B", "$89B"];
  public ccWithSLA: number[] = [34, 55, 12, 7, 67, 89, 22, 65, 78, 11, 1, 11];
  public positiveData = false;
  public goalCleanRate: String = "84%";
  public goalCCUpb: String = "6.45hrs";
  public commitmentValue: String = "0";
  public confirmedUPBCount: String = "0";
  public ccSLAPercentage: String = "0";
  public cleanRatePercentage: String = "0";
  public duration: String = "Month";
  public date = new Date();
  public cleanRateCount: String = "0";
  public confirmedSLACount: String = "0";
  public showCharts = true;

  public showExecutive = false;

  public data: any;
  subscription: Subscription;
  public selectedDuration: Commitments;
  public monthlyCommitments: Commitments;
  public yearToDateCommitments: Commitments;
  public threeMonthsCommitments: Commitments;
  public sixMonthsCommitments: Commitments;
  public twelveMonthsCommitments: Commitments;

  public chartValuesMf: Subject<Commitments> = new Subject<Commitments>();

  @ViewChild("mfCConfirmed")
  private ccChartComponent: CommitmentsConfirmedChartComponent;

  @ViewChild("mfConfirmedUpb")
  private mfConfirmedUpb: CommitmentsConfirmedChartComponent;//mfCConfirmed

  @ViewChild("mfSLA")
  private mfSLA: CommitmentsConfirmedChartComponent;

  @ViewChild("mfCleanRate")
  private mfCleanRate: CommitmentsConfirmedChartComponent;

  // @ViewChild("barConfirmedCommits") 
  // canvasChart: ElementRef;

  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales:
    {
      yAxes: [{

        gridLines: {
          display: false,
          drawOnChartArea: false
        },
        ticks: {
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          drawOnChartArea: false
        }
      }]
    }

  };
  public barChartType = 'bar';
  public colors: Color[] = [
    {
      borderColor: '#87ceeb',
      backgroundColor: 'rgba(128, 182, 244, 0.6)'//this.gradientStroke,//'linear-gradient(180deg, rgba(73, 170, 230, 0.31) 12.44%, rgba(73, 170, 230, 0) 100.32%)',
    },
  ];



  constructor(private exeTrends: ExecutiveComTrendsService, private datePipe: DatePipe) {
    //  this.duration = "in " + datePipe.transform(this.date.getMonth(),'MMMM');
    console.log(this.duration);
  }

  //  [highlightedValue]="confirmedUPBCount"
  //  [chartData]="confirmedUPB"
  //  [positiveData]="positiveData"
  //  [duration]="duration"

  ngOnInit(): void {
    console.log(this.cleanRateCount);
    this.commitmentValue = "999";
    this.twelveMonthsCommitments = new Commitments();
    this.twelveMonthsCommitments.cleanRate = [1, 17, 60, 25, 40, 13, 42, 1, 9, 10, 11, 12];
    this.twelveMonthsCommitments.commitmentsConfirmed = [89, 13, 4, 13, 1, 8, 12, 34, 89, 12, 56, 89];
    this.twelveMonthsCommitments.confirmedUPB = ["$89B", "$13B", "$4B", "$13B", "$1B", "$8B", "$12B", "$34B", "$89B", "$12B", "$56B", "$89B"];
    this.twelveMonthsCommitments.confirmedUPBCount = "2290";
    this.twelveMonthsCommitments.cleanRateCount = "122";
    this.twelveMonthsCommitments.confirmedSLACount = "989";
    this.twelveMonthsCommitments.commitmentValue = "999";
    this.twelveMonthsCommitments.commitmentsConfirmedCount = 232;
    this.ccWithSLA = [34, 55, 12, 7, 67, 89, 22, 65, 78, 11, 1, 11];
    this.twelveMonthsCommitments.ccWithSLA = [34, 55, 12, 7, 67, 89, 22, 65, 78, 11, 1, 11];
    this.goalCCUpb = "6.5 " + "hrs";
    this.twelveMonthsCommitments.confirmedSLAGoal = "6.5";
    this.goalCCUpb = this.twelveMonthsCommitments.confirmedSLAGoal + "hrs";

    this.monthlyCommitments = new Commitments();
    this.monthlyCommitments.cleanRate = [19, 1, 30, 50, 20, 26, 21, 2, 18, 20, 22, 6];
    this.monthlyCommitments.commitmentsConfirmed = [45, 6, 8, 26, 2, 4, 24, 4, 69, 62, 6, 79];
    this.monthlyCommitments.confirmedUPB = ["$9B", "$23B", "$24B", "$3B", "$51B", "$18B", "$12B", "$74B", "$9B", "$24B", "$16B", "$9B"];
    this.monthlyCommitments.confirmedUPBCount = "4290";
    this.monthlyCommitments.cleanRateCount = "722";
    this.monthlyCommitments.confirmedSLACount = "89";
    this.monthlyCommitments.commitmentValue = "199";
    this.monthlyCommitments.commitmentsConfirmedCount = 632;
    this.ccWithSLA = [54, 5, 62, 27, 37, 45, 77, 27, 12, 81, 19, 1];
    this.monthlyCommitments.ccWithSLA = [34, 5, 62, 97, 67, 89, 62, 5, 7, 189, 21, 41];
    this.goalCCUpb = "9 " + "hrs";
    this.monthlyCommitments.confirmedSLAGoal = "2.5";
    this.goalCCUpb = this.monthlyCommitments.confirmedSLAGoal + "hrs";


    this.selectedDuration = this.twelveMonthsCommitments;

    //commitmentValue
    this.changeGraphValues();
    //  this.twelveMonthsCommitments.commitmentsConfirmedCount
    //  this.twelveMonthsCommitments.confirmedSLA
    //  this.twelveMonthsCommitments.confirmedSLACount

    // try{
    //   this.subscription = this.exeTrends.getExecutiveDetails().subscribe(data => { 
    //     this.data=data;

    //     console.log("Counts" +this.data);

    //     this.monthlyCommitments = this.data[1];
    //     this.threeMonthsCommitments = this.data[2];
    //     this.sixMonthsCommitments = this.data[3];
    //     this.yearToDateCommitments = this.data[4];
    //     this.twelveMonthsCommitments = this.data[5];

    //     console.log("Counts " +this.monthlyCommitments.confirmedUPBCount);
    //   this.selectedDuration = this.monthlyCommitments;
    //   this.showCharts = true;
    //   this.changeGraphValues();

    //   });
    // }catch(e){
    //   console.log(e);
    // }

  }
  public switch():void{
   // this.showCharts = !this.showCharts;
    this.showExecutive = !this.showExecutive;
  }

  public changeGraphValues(): void {

    //  this.chartData[0] = {data:this.selectedDuration.commitmentsConfirmed};
    this.commitmentValue = String(this.selectedDuration.commitmentsConfirmedCount);
    this.confirmedUPBCount = String(this.selectedDuration.confirmedUPBCount);
    this.cleanRateCount = String(this.selectedDuration.cleanRateCount);
    this.confirmedSLACount = String(this.selectedDuration.confirmedSLACount);
    this.cleanRate = this.selectedDuration.cleanRate;
    this.commitmentsConfirmed = this.selectedDuration.commitmentsConfirmed;
    this.ccWithSLA = this.selectedDuration.confirmedSLA;
    var arrayOfNumbers = this.selectedDuration.confirmedUPB.map((item: String) => { return item.substring(1, item.length - 2); });
    this.confirmedUPB = arrayOfNumbers.map(Number);

    this.goalCleanRate = this.selectedDuration.cleanRateGoal;
    this.goalCCUpb = this.selectedDuration.confirmedSLAGoal + "hrs";
    //  this.chartValuesMf.next(this.selectedDuration);
    if (this.ccChartComponent !== undefined)
      this.ccChartComponent.updateChartValues(this.selectedDuration);
    if (this.mfConfirmedUpb !== undefined)
      this.mfConfirmedUpb.updateChartValues(this.selectedDuration);
    if (this.mfCleanRate !== undefined)
      this.mfCleanRate.updateChartValues(this.selectedDuration);
    if (this.mfSLA !== undefined)
      this.mfSLA.updateChartValues(this.selectedDuration);

  }

  public month(): void {

    this.selectedDuration = this.monthlyCommitments;
    this.duration = "Month";
    //      this.duration = "in " + DatePipe.Format(this.date.getMonth()+1,'MMMM');//this.date.getMonth() + 1;
    this.changeGraphValues();
  }


  public threeMonths(): void {

    this.selectedDuration = this.threeMonthsCommitments;
    this.duration = "Trailing 3-Month Average";
    this.changeGraphValues();
  }

  public sixMonths(): void {
    this.selectedDuration = this.sixMonthsCommitments;
    this.duration = "Trailing 6-Month Average";
    this.changeGraphValues();
  }

  public yearToDate(): void {
    this.selectedDuration = this.yearToDateCommitments;
    this.duration = "Year to Date";
    this.changeGraphValues();
  }

  public twelveMonths(): void {
    this.selectedDuration = this.twelveMonthsCommitments;
    this.duration = "Trailing 12-Month Average";
    this.changeGraphValues();
  }

  //  public chartData: any = [{data:{32,3,4,34,56,78,43}}];
  public chartData: any = [
    {
      label: '1st Year',
      data: [],
    },
    {
      label: '2nd Year',
      data: []
    }
  ];


  public lineChartLabels: Label[] = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  public barChartsValues() {
    //   if(this.canvasChart!==undefined){
    //     const ctx:any = (<HTMLCanvasElement>this.canvasChart.nativeElement).getContext('2d');
    //   var myBarChart = new Chart(ctx, {
    //     type: 'bar',
    //     data: {labels: ["Jan", "Feb", "March", "April","May","June", "July", "Aug", "Sep","Oct", "Nov", "Dec"]

    //   }});
    // }
  }


}
