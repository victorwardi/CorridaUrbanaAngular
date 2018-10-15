import {Address} from './address.model';
import {EventDate} from './event-date.model';

export class Event {
  id: number;
  title: string;
  link: string;
  date: EventDate;
  address: Address;
  distances: string;
  siteSubscription: string;
  price: string;
  image: string;


  constructor(id: number, title: string, link: string, date: EventDate, address: Address, distances: string, siteSubscription: string, price: string, image: string) {
    this.id = id;
    this.title = title;
    this.link = link;
    this.date = date;
    this.address = address;
    this.distances = distances;
    this.siteSubscription = siteSubscription;
    this.price = price;
    this.image = image;
  }
}
