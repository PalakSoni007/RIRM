import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriceUserComponent } from './enterprice-user.component';

describe('EnterpriceUserComponent', () => {
  let component: EnterpriceUserComponent;
  let fixture: ComponentFixture<EnterpriceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriceUserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
