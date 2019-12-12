import {Country} from "./Country";

export class City {
  id: number;
  name: string;
  description: string;
  country: Country;


  constructor(id: number, name: string, description: string, country: Country) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.country = country;
  }
}
