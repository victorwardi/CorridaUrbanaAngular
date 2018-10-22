import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/post.model';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  loaded = false;
  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit() {

    this.postService.getPostsByCategory().then(
      postList => {
        this.posts = postList;
        this.loaded = true;
      }
    );
  }

  goToPost(id: any){
    this.router.navigate([id]);

  }
}

