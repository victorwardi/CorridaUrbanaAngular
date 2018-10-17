import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Event} from '../model/event.model';
import {EventService} from './events/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  eventListOriginal: Event[] = [];
  eventList: Event[] = [];
  loaded = false;
  @ViewChild('inputSearch')
  searchInputRef: ElementRef;

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.searchEvents('rj');
  }

  searchEvents(uf: string) {
    this.eventService.getEventsByUf(uf).then(() => {
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

  filterState(uf: string) {
    this.loaded = false;
    this.searchEvents(uf.valueOf());
  }

}
