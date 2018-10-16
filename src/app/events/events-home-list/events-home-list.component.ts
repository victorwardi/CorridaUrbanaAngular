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
