import { Injectable } from '@angular/core';
import {SERVER_URL} from "../app/app.module";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  private AIRPORT_SERVICE_API = SERVER_URL + 'airport/';
  constructor(private httpClient: HttpClient) { }

  public loadAirports() {
    return this.httpClient.get(this.AIRPORT_SERVICE_API, {});
  }
}
