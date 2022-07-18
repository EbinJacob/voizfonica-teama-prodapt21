import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseverifyComponent } from './pleaseverify.component';

describe('PleaseverifyComponent', () => {
  let component: PleaseverifyComponent;
  let fixture: ComponentFixture<PleaseverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PleaseverifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PleaseverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
