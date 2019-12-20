
export class Country {
  countryCode: string;
  name: string;
  continent: string;
  description: string;

  constructor(countryCode: string, name: string, continent: string, description: string) {
    this.countryCode = countryCode;
    this.name = name;
    this.continent = continent;
    this.description = description;
  }
}
