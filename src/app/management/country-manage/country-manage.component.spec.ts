import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryManageComponent } from './country-manage.component';

describe('CountryManageComponent', () => {
  let component: CountryManageComponent;
  let fixture: ComponentFixture<CountryManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
