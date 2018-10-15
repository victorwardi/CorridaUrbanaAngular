import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-home-list',
  templateUrl: './events-home-list.component.html',
  styleUrls: ['./events-home-list.component.css']
})
export class EventsHomeListComponent implements OnInit {

  events = Array(5);

  constructor() { }

  ngOnInit() {
  }

}
