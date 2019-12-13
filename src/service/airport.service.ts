import { Injectable } from '@angular/core';
import {SERVER_URL} from "../app/app.module";
import {HttpClient} from "@angular/common/http";
import {Airport} from "../model/Airport";

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  private AIRPORT_SERVICE_API = SERVER_URL + 'airport/';
  constructor(private httpClient: HttpClient) { }

  public loadAirports() {
    return this.httpClient.get(this.AIRPORT_SERVICE_API, {});
  }

  public saveAirport(airport: Airport) {
    this.httpClient.post(this.AIRPORT_SERVICE_API, airport).subscribe(res => console.log(res));
  }

  public delteAirport(airport: Airport) {
    this.httpClient.delete(this.AIRPORT_SERVICE_API + airport.code, {}).subscribe(res => console.log(res));
  }
}
