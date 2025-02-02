import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripManageComponent } from './trip-manage.component';

describe('TripManageComponent', () => {
  let component: TripManageComponent;
  let fixture: ComponentFixture<TripManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
