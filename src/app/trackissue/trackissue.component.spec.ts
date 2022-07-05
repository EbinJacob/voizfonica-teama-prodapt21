import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackissueComponent } from './trackissue.component';

describe('TrackissueComponent', () => {
  let component: TrackissueComponent;
  let fixture: ComponentFixture<TrackissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
