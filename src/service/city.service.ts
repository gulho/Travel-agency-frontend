import { Injectable } from '@angular/core';
import {SERVER_URL} from "../app/app.module";
import {HttpClient} from "@angular/common/http";
import {City} from "../model/City";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private CITY_SERVICE_API = SERVER_URL + "city/"

  constructor(private httpClient: HttpClient) { }

  public getAllCities() {
    return this.httpClient.get(this.CITY_SERVICE_API, {});
  }

  saveCity(cityForEdit: City) {
    
  }
}