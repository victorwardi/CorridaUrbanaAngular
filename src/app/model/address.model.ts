export class Address {

  city: string;
  state: string;
  uf: string;
  place: string;
  description: string;
  longitude: string;
  latitude: string;


  constructor(city: string, state: string, uf: string, place: string, description: string, longitude: string, latitude: string) {
    this.city = city;
    this.state = state;
    this.uf = uf;
    this.place = place;
    this.description = description;
    this.longitude = longitude;
    this.latitude = latitude;
  }
}
