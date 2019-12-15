import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CityManageComponent } from './management/city-manage/city-manage.component';
import { CountryManageComponent } from './management/country-manage/country-manage.component';
import { AirportManageComponent } from './management/airport-manage/airport-manage.component';
import { HotelManageComponent } from './management/hotel-manage/hotel-manage.component';
import { TripManageComponent } from './management/trip-manage/trip-manage.component';
import { PromotedTripComponent } from './main-app/promoted-trip/promoted-trip.component';
import {TripComponent} from './main-app/trip/trip.component';


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'trip'
  },
  {
    path: 'management',
    pathMatch: 'full',
    redirectTo: 'management/country'
  }, {
    path: 'trip',
    component: TripComponent
  }, {
    path: 'management/city',
    component: CityManageComponent
  }, {
    path: 'management/country',
    component: CountryManageComponent
  }, {
    path: 'management/airport',
    component: AirportManageComponent
  }, {
    path: 'management/hotel',
    component: HotelManageComponent
  }, {
    path: 'management/trip',
    component: TripManageComponent
  }/*, {
    path: 'login',
    component: LoginComponent
  }*/
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserRegisterComponent,
    CityManageComponent,
    CountryManageComponent,
    AirportManageComponent,
    HotelManageComponent,
    TripManageComponent,
    TripComponent,
    PromotedTripComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const SERVER_URL = 'http://localhost:8081/';
