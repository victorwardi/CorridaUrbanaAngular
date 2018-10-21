import {Component, OnInit} from '@angular/core';
import {PostService} from "./post.service";
import {Post} from "../model/post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;
  loaded = false;
  constructor(private postService: PostService) {
  }

  ngOnInit() {

    this.postService.getPostByID(15758).then(
        p => {
          this.post = p;
          this.loaded = true;


        }
      );

    }
}
