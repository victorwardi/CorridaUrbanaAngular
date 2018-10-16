import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-post-widget',
  templateUrl: './post-widget.component.html',
  styleUrls: ['./post-widget.component.css']
})
export class PostWidgetComponent implements OnInit, AfterViewInit {

  @Input()
  qtd: number;
  @Input()
  title =  '';
  posts: number[];

  constructor(private renderer: Renderer2, private  element: ElementRef) {
  }

  ngOnInit() {
    this.posts = Array(this.qtd);

  }

  ngAfterViewInit(): void {
    // Add class 'curb-post-title-1' to all elements which have class 'curb-post-title'
    this.element.nativeElement.querySelectorAll('.curb-post-title').forEach(
      (post) => this.renderer.addClass(post, 'curb-post-title-' + this.qtd)
    );


  }


}
