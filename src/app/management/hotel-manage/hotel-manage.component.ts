import {Component, OnInit, TemplateRef} from '@angular/core';
import {Hotel} from '../../../model/Hotel';
import {City} from '../../../model/City';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HotelService} from '../../../service/hotel.service';
import {CityService} from '../../../service/city.service';
import {Airport} from '../../../model/Airport';
import {Country} from "../../../model/Country";

@Component({
  selector: 'app-hotel-manage',
  templateUrl: './hotel-manage.component.html',
  styleUrls: ['./hotel-manage.component.css']
})
export class HotelManageComponent implements OnInit {
  hotels: Hotel[];
  private hotelForEdit: Hotel;
  private cities: City[];
  hotelForDelete: Hotel;

  constructor(private modalService: NgbModal, private hotelService: HotelService, private cityService: CityService) { }

  ngOnInit() {
    this.loadHotels();
    this.cityService.getAllCities().subscribe((data: City[]) => this.cities = data);
  }

  private loadHotels() {
    this.hotelService.getAllHotels().subscribe((data: Hotel[]) => this.hotels = data);
  }

  public editHotel(hotelEdit: TemplateRef<any>, hotel?: Hotel) {
    if (hotel === undefined) {
      this.hotelForEdit = new Hotel(null, '', '', 0, this.cities[0]);
    } else {
      this.hotelForEdit = hotel;
    }
    this.modalService.open(hotelEdit, {});
  }

  public openDeleteHotelDialog(deleteHotelModal: TemplateRef<any>, hotel: Hotel) {
    this.hotelForDelete = hotel;
    this.hotelService.deleteHotel(hotel);
  }

  public saveHotel() {
    console.log(this.hotelForEdit);
    this.hotelService.saveHotel(this.hotelForEdit);
    this.modalService.dismissAll();
  }

  public deleteHotel() {
    this.hotelService.deleteHotel(this.hotelForDelete);
    this.modalService.dismissAll();
  }

  private compareCountry(c1: Country, c2: Country) {
    if (c1 != null && c2 != null) {
      if (c1.countryCode === c2.countryCode) {
        return true;
      }
    }
    return false;
  }
}
