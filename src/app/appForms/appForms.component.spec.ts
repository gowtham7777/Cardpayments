import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppForms } from './appForms.component';

describe('PaymentsComponent', () => {
  let component: AppForms;
  let fixture: ComponentFixture<AppForms>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppForms ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
