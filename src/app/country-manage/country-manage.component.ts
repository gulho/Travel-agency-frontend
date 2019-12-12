import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Continent} from "../../model/Continent";
import {CountryService} from "../../service/country.service";
import {Country} from "../../model/Country";

@Component({
  selector: 'app-country-manage',
  templateUrl: './country-manage.component.html',
  styleUrls: ['./country-manage.component.css']
})
export class CountryManageComponent implements OnInit {

  continents = Continent;
  keys = Object.keys;
  countries: Country[];

  countryForEdit: Country;
  countryForDelete: Country;

  constructor(public modalService: NgbModal, private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getAllCountries().subscribe((data: Country[]) => this.countries = data);
  }

  editCountry(countryEdit, country?: Country) {
    if (country == undefined) {
      this.countryForEdit = new Country("", "", Continent.EUROPE, "");
    }
    else {
      this.countryForEdit = country;
    }
    this.modalService.open(countryEdit, {});
  }

  public saveCountry(f: NgForm) {

    this.countryService.saveCountry(this.countryForEdit);
    this.modalService.dismissAll();
  }

  openDeleteCountryDialog(deleteCountry: TemplateRef<any>, country: Country) {
    this.countryForDelete = country;
    this.modalService.open(deleteCountry, {});
  }

  deleteCountry() {
    this.countryService.deleteCountry(this.countryForDelete);
    this.modalService.dismissAll();
  }
}
