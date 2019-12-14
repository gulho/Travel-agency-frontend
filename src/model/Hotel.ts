import {City} from './City';

export class Hotel {
  id: number;
  name: string;
  description: string;
  standard: number;
  city: City;

  constructor(id: number, name: string, description: string, standard: number, city: City) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.standard = standard;
    this.city = city;
  }
}
