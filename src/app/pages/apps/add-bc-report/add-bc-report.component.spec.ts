import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBcReportComponent } from './add-bc-report.component';

describe('AddBcReportComponent', () => {
  let component: AddBcReportComponent;
  let fixture: ComponentFixture<AddBcReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBcReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBcReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
