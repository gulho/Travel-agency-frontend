import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedTripComponent } from './promoted-trip.component';

describe('PromotedTripComponent', () => {
  let component: PromotedTripComponent;
  let fixture: ComponentFixture<PromotedTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotedTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotedTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
