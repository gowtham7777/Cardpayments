import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudendInfoComponent } from './studend-info.component';

describe('StudendInfoComponent', () => {
  let component: StudendInfoComponent;
  let fixture: ComponentFixture<StudendInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudendInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudendInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
