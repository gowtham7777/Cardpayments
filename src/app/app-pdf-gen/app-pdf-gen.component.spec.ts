import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPdfGenComponent } from './app-pdf-gen.component';

describe('AppPdfGenComponent', () => {
  let component: AppPdfGenComponent;
  let fixture: ComponentFixture<AppPdfGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPdfGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPdfGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
