import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfdashboardComponent } from './mfdashboard.component';

describe('MfdashboardComponent', () => {
  let component: MfdashboardComponent;
  let fixture: ComponentFixture<MfdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
