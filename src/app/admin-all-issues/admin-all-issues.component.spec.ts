import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllIssuesComponent } from './admin-all-issues.component';

describe('AdminAllIssuesComponent', () => {
  let component: AdminAllIssuesComponent;
  let fixture: ComponentFixture<AdminAllIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllIssuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
