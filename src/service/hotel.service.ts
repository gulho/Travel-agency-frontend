import { Injectable } from '@angular/core';
import {SERVER_URL} from '../app/app.module';
import {HttpClient} from '@angular/common/http';
import {Hotel} from '../model/Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private HOTEL_SERVICE_API = SERVER_URL + 'hotel/';
  constructor(private httpClient: HttpClient) { }

  public getAllHotels() {
    return this.httpClient.get(this.HOTEL_SERVICE_API, {});
  }

  public saveHotel(hotel: Hotel) {
    this.httpClient.post(this.HOTEL_SERVICE_API, hotel).subscribe(res => console.log(res));
  }

  public deleteHotel(hotel: Hotel) {
    this.httpClient.delete(this.HOTEL_SERVICE_API + hotel.id, {}).subscribe(res => console.log(res));
  }
}
