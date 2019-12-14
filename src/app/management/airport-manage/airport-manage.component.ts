import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AirportService} from "../../../service/airport.service";
import {CityService} from "../../../service/city.service";
import {Airport} from "../../../model/Airport";
import {City} from "../../../model/City";

@Component({
  selector: 'app-airport-manage',
  templateUrl: './airport-manage.component.html',
  styleUrls: ['./airport-manage.component.css']
})
export class AirportManageComponent implements OnInit {

  private airports: Airport[];
  private airportForEdit: Airport;
  private cities: City[];
  airportForDelete: Airport;

  constructor(private modalService: NgbModal, private airportService: AirportService, private cityService: CityService) { }

  ngOnInit() {
    this.loadAirports();
    this.cityService.getAllCities().subscribe((data: City[]) => {this.cities = data; console.log(this.cities)});
  }

  private loadAirports() {
    this.airportService.loadAirports().subscribe((data: Airport[]) => this.airports = data);
  }

  public saveAirport() {
    console.log(this.airportForEdit);
    this.airportService.saveAirport(this.airportForEdit);
    this.modalService.dismissAll();
  }

  public airportDelete() {
    this.airportService.delteAirport(this.airportForDelete);
    this.modalService.dismissAll();
  }

  public editAirport(airportEdit: TemplateRef<any>, airport?: Airport) {
    if (airport == undefined) {
      this.airportForEdit = new Airport("", "", "", this.cities[0]);
      console.log(this.airportForEdit);
      console.log(this.cities[0]);
    } else {
      this.airportForEdit = airport;
    }
    console.log(this.airportForEdit);
    this.modalService.open(airportEdit, {});
  }

  public openDeleteAirportDialog(deleteAirportModal: TemplateRef<any>, airport: Airport) {
    this.airportForDelete = airport;
    this.modalService.open(deleteAirportModal, {});
  }
}
