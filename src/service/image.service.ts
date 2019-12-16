import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_URL} from '../app/app.module';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private IMAGES_SERVICE_URL = SERVER_URL + 'image/';

  constructor(private httpClient: HttpClient) { }

  public saveImage(images: FormData, tripId: number) {
    this.httpClient.post(this.IMAGES_SERVICE_URL + 'trip/' + tripId, images).subscribe(ret => console.log(ret));
  }
}
