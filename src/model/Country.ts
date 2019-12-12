import {Continent} from "./Continent";

export class Country {
  countryCode: string;
  name: string;
  continent: Continent;
  description: string;

  constructor(countryCode: string, name: string, continent: Continent, description: string) {
    this.countryCode = countryCode;
    this.name = name;
    this.continent = continent;
    this.description = description;
  }
}
