import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TourSearchFormComponent } from './tour-search-form/tour-search-form.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ManagementComponent } from './management/management.component';
import { TourComponent } from './tour/tour.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tour'
  }, {
    path: 'tour',
    component: TourComponent
  }, {
    path: 'management',
    component: ManagementComponent
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
    ManagementComponent,
    TourComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const SERVER_URL = 'http://localhost:8080/';
