import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelManageComponent } from './hotel-manage.component';

describe('HotelManageComponent', () => {
  let component: HotelManageComponent;
  let fixture: ComponentFixture<HotelManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
