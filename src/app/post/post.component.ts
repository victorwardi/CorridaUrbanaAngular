import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
import {Post} from '../model/post.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;
  loaded = false;
  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.postService.getPostByID(this.route.snapshot.params['id']).then(
        p => {
          this.post = p;
          this.loaded = true;


        }
      );

    }
}
