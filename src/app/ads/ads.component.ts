import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  @Input()
  banner = '';

  @Input()
  title = '';

  @Input()
  showOnlyDesktop = false;

  constructor() {
  }

  ngOnInit() {
 console.log(this.showOnlyDesktop);
  }


}
