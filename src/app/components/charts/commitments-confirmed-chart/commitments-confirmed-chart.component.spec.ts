import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitmentsConfirmedChartComponent } from './commitments-confirmed-chart.component';

describe('CommitmentsConfirmedChartComponent', () => {
  let component: CommitmentsConfirmedChartComponent;
  let fixture: ComponentFixture<CommitmentsConfirmedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitmentsConfirmedChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitmentsConfirmedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
