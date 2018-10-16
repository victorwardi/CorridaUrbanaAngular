import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-calendar',
  templateUrl: './widget-calendar.component.html',
  styleUrls: ['./widget-calendar.component.css']
})
export class WidgetCalendarComponent implements OnInit {

  events;

  constructor() { }

  ngOnInit() {

    this.events = [
      { day: '10', month: 'set', title: 'Corrida das Estações Verão', place : 'Rio de Janeiro - RJ' },
      { day: '12', month: 'out', title: 'Corrida Social', place : 'Niterói - RJ' },
      { day: '14', month: 'out', title: 'WTR Videiras', place : 'Niterói - RJ' },
      { day: '21', month: 'out', title: 'Wrun', place : 'Niterói - RJ' },
      { day: '21', month: 'out', title: 'Marathon Race', place : 'Niterói - RJ' },
      { day: '28', month: 'out', title: 'Venus Run', place : 'São Paulo - SP' },
      { day: '18', month: 'out', title: 'Corrida Social', place : 'Niterói - RJ' },
    ];
  }

}

