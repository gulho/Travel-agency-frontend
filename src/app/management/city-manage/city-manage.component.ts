import {Component, OnInit, TemplateRef} from '@angular/core';
import {City} from "../../../model/City";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CityService} from "../../../service/city.service";
import {Country} from "../../../model/Country";
import {CountryService} from "../../../service/country.service";

@Component({
  selector: 'app-city-manage',
  templateUrl: './city-manage.component.html',
  styleUrls: ['./city-manage.component.css']
})
export class CityManageComponent implements OnInit {
  cities: City[];
  countries: Country[]
  cityForEdit: City;
  cityForDelete: City;

  constructor(public modalService: NgbModal, private cityService: CityService, private countryService: CountryService) { }

  ngOnInit() {
    this.loadAllCities();
    this.countryService.getAllCountries().subscribe((data: Country[]) => this.countries = data);
    console.log(this.countries);
  }

  editCity(cityEdit: TemplateRef<any>, city?: City) {
    if (city == undefined) {
      this.cityForEdit = new City(null, "", "", this.countries[0]);
    } else {
      this.cityForEdit = city;
    }
    this.modalService.open(cityEdit,{});
  }

  openDeleteCityDialog(deleteCityModal: TemplateRef<any>, city: City) {
    this.cityForDelete = city;
    this.modalService.open(deleteCityModal, {});
  }

  saveCity() {
    this.cityService.saveCity(this.cityForEdit);
    this.modalService.dismissAll();
  }

  deleteCity() {
    this.cityService.delete(this.cityForDelete)
  }

  private loadAllCities() {
     this.cityService.getAllCities().subscribe((data: City[]) => this.cities = data);
  }
}
