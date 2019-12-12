import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TourSearchFormComponent } from './tour-search-form/tour-search-form.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TourComponent } from './tour/tour.component';
import { CityManageComponent } from './city-manage/city-manage.component';
import { CountryManageComponent } from './country-manage/country-manage.component';


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tour'
  },
  {
    path: 'management',
    pathMatch: 'full',
    /*redirectTo: 'management/city'*/
    redirectTo: 'management/country'
  },{
    path: 'tour',
    component: TourComponent
  }, {
    path: 'management/city',
    component: CityManageComponent
  }, {
    path: 'management/country',
    component: CountryManageComponent
  }/*, {
    path: 'countrylanguage',
    component: CountryLanguageComponent
  }, {
    path: 'login',
    component: LoginComponent
  }*/
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TourSearchFormComponent,
    UserRegisterComponent,
    TourComponent,
    CityManageComponent,
    CountryManageComponent
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
