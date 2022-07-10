import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandprivacyComponent } from './termsandprivacy.component';

describe('TermsandprivacyComponent', () => {
  let component: TermsandprivacyComponent;
  let fixture: ComponentFixture<TermsandprivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsandprivacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsandprivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
