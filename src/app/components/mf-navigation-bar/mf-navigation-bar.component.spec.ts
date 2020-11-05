import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfNavigationBarComponent } from './mf-navigation-bar.component';

describe('MfNavigationBarComponent', () => {
  let component: MfNavigationBarComponent;
  let fixture: ComponentFixture<MfNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfNavigationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
