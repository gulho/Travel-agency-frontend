import { Injectable } from '@angular/core';
import {SERVER_URL} from "../app.module";
import {HttpClient} from "@angular/common/http";
import {Country} from "../../model/Country";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private COUNTRY_SERVICE_API = SERVER_URL + 'country/'

  constructor(private httpClient: HttpClient) { }

  public saveCountry(country: Country) {
    this.httpClient.post(this.COUNTRY_SERVICE_API, country).subscribe(ret => {if (ret == true){return true} else {return false}});
  }

  public getAllCountries() {
    return this.httpClient.get(this.COUNTRY_SERVICE_API);
  }

  public deleteCountry(country: Country) {
    return this.httpClient.delete(this.COUNTRY_SERVICE_API + '/' + country.countryCode).subscribe(
      ret => {
        if (ret == true) {
          return true;
        } else {
          return ret;
        }
      }
    );
  }
}
