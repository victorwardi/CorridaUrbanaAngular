import { Component, OnInit } from '@angular/core';
import {Post} from "../../model/post.model";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts : Post[] = [];

  loaded = false;
  constructor(private postService: PostService) {
  }

  ngOnInit() {

    this.postService.getPostsByCategory().then(
      p => {
        this.posts = p;
        this.loaded = true;


      }
    );

  }
}

