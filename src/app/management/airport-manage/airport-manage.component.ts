import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AirportService} from "../../../service/airport.service";
import {CityService} from "../../../service/city.service";
import {Airport} from "../../../model/Airport";

@Component({
  selector: 'app-airport-manage',
  templateUrl: './airport-manage.component.html',
  styleUrls: ['./airport-manage.component.css']
})
export class AirportManageComponent implements OnInit {

  private airports: Airport[];

  constructor(private modalService: NgbModal, private airportService: AirportService, private cityService: CityService) { }

  ngOnInit() {
    this.loadAirports();
  }

  private loadAirports() {
    this.airportService.loadAirports().subscribe((data: Airport[]) => this.airports = data);
  }
}
