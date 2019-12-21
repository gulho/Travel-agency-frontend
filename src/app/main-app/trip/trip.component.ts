import { Component, OnInit } from '@angular/core';
import {TripService} from '../../../service/trip.service';
import {Trip} from '../../../model/Trip';
import {SERVER_URL} from '../../app.module';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  private SERVER_URL = SERVER_URL;
  trips: Trip[] = [];
  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getAllTrips().subscribe((data: Trip[]) => this.trips = data);
  }

}
