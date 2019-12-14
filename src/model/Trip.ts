import {Airport} from './Airport';
import {Hotel} from './Hotel';
import {MealType} from './MealType';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

export class Trip {
  id: number;
  name: string;
  from: Airport;
  to: Airport;
  hotel: Hotel;
  fromDate: Date;
  toDate: Date;
  mealType: MealType;
  priceForAdult: number;
  priceFroChild: number;
  adultBeds: number;
  childBeds: number;
  isPromoted: boolean;

  constructor(name: string, from: Airport, to: Airport, hotel: Hotel, fromDate: Date, toDate: Date, mealType: MealType,
              priceForAdult: number, priceFroChild: number, adultBeds: number, childBeds: number, isPromoted: boolean) {
    this.name = name;
    this.from = from;
    this.to = to;
    this.hotel = hotel;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.mealType = mealType;
    this.priceForAdult = priceForAdult;
    this.priceFroChild = priceFroChild;
    this.adultBeds = adultBeds;
    this.childBeds = childBeds;
    this.isPromoted = isPromoted;
  }
}
