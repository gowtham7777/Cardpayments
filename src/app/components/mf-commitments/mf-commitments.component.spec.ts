import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfCommitmentsComponent } from './mf-commitments.component';

describe('MfCommitmentsComponent', () => {
  let component: MfCommitmentsComponent;
  let fixture: ComponentFixture<MfCommitmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfCommitmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfCommitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
