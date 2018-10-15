import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Event} from '../model/event.model';
import {EventService} from './event.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventListOriginal: Event[] = [];
  eventList: Event[] = [];
  loaded = false;
  @ViewChild('inputSearch')
  searchInputRef: ElementRef;

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.searchEvents();
  }

  searchEvents() {
    this.eventService.getEventsByUf('rj').then(() => {
        this.loaded = true;
        this.eventListOriginal = this.eventService.results;
        this.eventList = this.eventListOriginal;
        console.log('%cEvent service returned: ' + this.eventListOriginal.length + ' events.', 'color: blue');
      }
    );

  }

  filterEvents() {
    this.loaded = false;
    console.log('searching events with name: ' + this.searchInputRef.nativeElement.value);
    this.eventList = this.eventListOriginal.filter(
      c => c.title.toLowerCase().includes(this.searchInputRef.nativeElement.value.toLowerCase())
    );
    this.loaded = true;
    console.log('%cYour search returned: ' + this.eventList.length + ' events.', 'color: red');

  }

}
