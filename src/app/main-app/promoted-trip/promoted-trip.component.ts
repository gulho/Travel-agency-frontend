import { Component, OnInit } from '@angular/core';
import {TripService} from '../../../service/trip.service';
import {Trip} from '../../../model/Trip';
import {SERVER_URL} from '../../app.module';
import {NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-promoted-trip',
  templateUrl: './promoted-trip.component.html',
  styleUrls: ['./promoted-trip.component.css']
})
export class PromotedTripComponent implements OnInit {

  promotedTrips: Trip[];
  private SERVER_URL = SERVER_URL;
  pauseOnHover = true;
  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getPromotedTrips().subscribe((data: Trip[]) => this.promotedTrips = data);
  }
  onSlide(slideEvent: NgbSlideEvent) {
    if (/*this.unpauseOnArrow && */slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      /*this.togglePaused();*/
    }
    if (/*this.pauseOnIndicator && */!slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      /*this.togglePaused();*/
    }
  }
}
