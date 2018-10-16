import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {EventService} from './calendar/events/event.service';
import {Event} from './model/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Corrida Urbana Angular';

  activePage = 'calendar';

}
