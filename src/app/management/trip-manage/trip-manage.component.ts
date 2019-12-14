import {Component, OnInit, TemplateRef} from '@angular/core';
import {Trip} from '../../../model/Trip';
import {Airport} from '../../../model/Airport';
import {NgbModal, NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {TripService} from '../../../service/trip.service';
import {AirportService} from '../../../service/airport.service';
import {HotelService} from '../../../service/hotel.service';
import {Hotel} from '../../../model/Hotel';
import {MealType} from '../../../model/MealType';
import {Continent} from '../../../model/Continent';

@Component({
  selector: 'app-trip-manage',
  templateUrl: './trip-manage.component.html',
  styleUrls: ['./trip-manage.component.css']
})
export class TripManageComponent implements OnInit {
  trips: Trip[];
  tripForEdit: Trip;
  airports: Airport[];
  tripFroDelete: Trip;
  hotels: Hotel[];

  private fromDate: NgbDate;
  private toDate: NgbDate;
  private hoveredDate: NgbDate;

  keys = Object.keys;
  mealTypes = MealType;

  constructor(private modalService: NgbModal, private tripService: TripService, private airportService: AirportService,
              private hotelService: HotelService) { }

  ngOnInit() {
    this.loadTrips();
    this.airportService.loadAirports().subscribe((data: Airport[]) => this.airports = data);
    this.hotelService.getAllHotels().subscribe((data: Hotel[]) => this.hotels = data);
  }

  private loadTrips() {
    // tslint:disable-next-line:only-arrow-functions
    this.tripService.getAllTrips().subscribe((data: Trip[]) => {this.trips = data; console.log(this.trips);});
  }

  public editTrip(tripEdit: TemplateRef<any>, trip?: Trip) {
    if (trip === undefined) {
      this.tripForEdit = new Trip('', this.airports[0], this.airports[0], this.hotels[0], new Date(), new Date(), MealType.RO,
        0, 0, 0, 0, false);
    } else {
      this.tripForEdit = trip;
    }
    this.modalService.open(tripEdit, {});
  }

  public openDeleteTripDialog(deleteCityModal: TemplateRef<any>, trip: Trip) {
    this.tripFroDelete = trip;
    this.modalService.open(deleteCityModal, {});
  }

  public saveTrip() {
    this.tripForEdit.fromDate = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day);
    this.tripForEdit.toDate = new Date(this.toDate.year, this.toDate.month, this.toDate.day);
    this.tripService.saveTrip(this.tripForEdit);
    this.modalService.dismissAll();
  }

  public deleteTrip() {
    this.tripService.deleteTrip(this.tripFroDelete);
    this.modalService.dismissAll();
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }
  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
}
