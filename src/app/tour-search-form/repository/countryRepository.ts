import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {SERVER_URL} from '../../app.module';

@Injectable({
  providedIn: 'root'
})

export class CountryRepository {
  constructor(private httpClient: HttpClient ) { }

  public getAllCity() {
    let sdf;
    this.httpClient.get(SERVER_URL + '/trip/country/getAllNames').subscribe((data: any[]) => sdf = data);
    console.log(sdf);
    return sdf;
  }
}
