import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansandoffersComponent } from './plansandoffers.component';

describe('PlansandoffersComponent', () => {
  let component: PlansandoffersComponent;
  let fixture: ComponentFixture<PlansandoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansandoffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansandoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
