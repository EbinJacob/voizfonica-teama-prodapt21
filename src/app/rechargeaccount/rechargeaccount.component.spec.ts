import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeaccountComponent } from './rechargeaccount.component';

describe('RechargeaccountComponent', () => {
  let component: RechargeaccountComponent;
  let fixture: ComponentFixture<RechargeaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargeaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
