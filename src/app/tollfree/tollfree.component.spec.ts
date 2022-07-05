import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TollfreeComponent } from './tollfree.component';

describe('TollfreeComponent', () => {
  let component: TollfreeComponent;
  let fixture: ComponentFixture<TollfreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TollfreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TollfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
