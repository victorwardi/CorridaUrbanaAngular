import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Output() pageSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(feature: string) {

    this.pageSelected.emit(feature);

  }
}

