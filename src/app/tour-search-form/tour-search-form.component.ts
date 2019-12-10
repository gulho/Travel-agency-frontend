import { Component, OnInit } from '@angular/core';
import {CountryRepository} from './repository/countryRepository';

@Component({
  selector: 'app-tour-search-form',
  templateUrl: './tour-search-form.component.html',
  styleUrls: ['./tour-search-form.component.css']
})
export class TourSearchFormComponent implements OnInit {

  countries = [];
  constructor(private countryRepository: CountryRepository) {
  }

  ngOnInit() {
    this.countries = this.countryRepository.getAllCity();
  }

}
