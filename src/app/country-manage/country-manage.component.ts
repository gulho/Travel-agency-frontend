import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Continent} from "../../model/Continent";

@Component({
  selector: 'app-country-manage',
  templateUrl: './country-manage.component.html',
  styleUrls: ['./country-manage.component.css']
})
export class CountryManageComponent implements OnInit {

  continents = Continent
  keys = Object.keys;

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

  saveCity(f: NgForm) {

  }

  editCity(cityEdit) {
    this.modalService.open(cityEdit, {});
  }
}
