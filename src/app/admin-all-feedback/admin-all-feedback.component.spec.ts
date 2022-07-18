import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllFeedbackComponent } from './admin-all-feedback.component';

describe('AdminAllFeedbackComponent', () => {
  let component: AdminAllFeedbackComponent;
  let fixture: ComponentFixture<AdminAllFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
