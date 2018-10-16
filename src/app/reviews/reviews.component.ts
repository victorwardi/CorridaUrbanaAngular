import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input()
  qtd = 0;

  reviews: number[];
  constructor() { }

  ngOnInit() {

    this.reviews = Array(this.qtd);
  }

}
