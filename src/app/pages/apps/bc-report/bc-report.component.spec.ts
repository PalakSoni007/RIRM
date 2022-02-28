import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcReportComponent } from './bc-report.component';

describe('BcReportComponent', () => {
  let component: BcReportComponent;
  let fixture: ComponentFixture<BcReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
