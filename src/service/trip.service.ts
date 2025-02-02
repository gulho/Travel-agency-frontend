import { Injectable } from '@angular/core';
import {SERVER_URL} from '../app/app.module';
import {HttpClient} from '@angular/common/http';
import {Trip} from '../model/Trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private TRIP_SERVICE_URL = SERVER_URL + 'trip/';
  constructor(private httpClient: HttpClient) { }

  public getAllTrips() {
    return this.httpClient.get(this.TRIP_SERVICE_URL, {});
  }

  public saveTrip(trip: Trip) {
    console.log(trip);
    this.httpClient.post(this.TRIP_SERVICE_URL, trip).subscribe(ret => console.log(ret));
  }

  public deleteTrip(trip: Trip) {
    this.httpClient.delete(this.TRIP_SERVICE_URL + trip.id, {}).subscribe(ret => console.log(ret));
  }

  public getPromotedTrips() {
    return this.httpClient.get(this.TRIP_SERVICE_URL + '/promoted');
  }

  public getTripById(id: number) {
    return this.httpClient.get(this.TRIP_SERVICE_URL + '/' + id);
  }
}
