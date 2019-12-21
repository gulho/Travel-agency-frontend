import {Component, OnInit, TemplateRef} from '@angular/core';
import {Trip} from '../../../model/Trip';
import {TripService} from '../../../service/trip.service';
import {ActivatedRoute} from '@angular/router';
import {SERVER_URL} from '../../app.module';
import {MealType} from '../../../model/MealType';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  trip: Trip;
  id: number;
  private SERVER_URL = SERVER_URL;
  private mealType = MealType;
  private currentImageId: number;
  constructor(private tripService: TripService, private activatedRoute: ActivatedRoute, public modalService: NgbModal,) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');;
    this.tripService.getTripById(this.id).subscribe((data: Trip) => {this.trip = data; console.log(this.trip)});
  }

  openBigImage(tripImage: TemplateRef<any>, id: number) {
    this.currentImageId = id;
    this.modalService.open(tripImage);
  }
}
