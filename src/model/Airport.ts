import {City} from "./City";

export class Airport {
  code: string;
  name: string;
  descriptions: string;
  city: City;

  constructor(code: string, name: string, descriptions: string, city: City) {
    this.code = code;
    this.name = name;
    this.descriptions = descriptions;
    this.city = city;
  }
}
