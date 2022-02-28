import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriceAccountComponent } from './enterprice-account.component';

describe('EnterpriceAccountComponent', () => {
  let component: EnterpriceAccountComponent;
  let fixture: ComponentFixture<EnterpriceAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriceAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
