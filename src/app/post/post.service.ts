import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post.model";
import {MediaService} from "../media/media.service";
import {AuthorService} from "../author/author.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post: Post;
  postList: Post[] = [];

  constructor(private http: HttpClient, private mediaService: MediaService, private authorService: AuthorService) {
  }

  async getPostsByCategory() {
    let list = await this.http.get<Post[]>('https://www.corridaurbana.com.br/wp-json/wp/v2/posts/?&fields=id,slug,title,date,author,featured_media').toPromise();

    list.forEach(async p => {

        await this.mediaService.getMediaByID(p.featured_media);
        const media = this.mediaService.media;
        await this.authorService.getAuthorByID('1');
        console.log('author: ' + this.authorService.author);

        var postOb = new Post(p.id,
          p.date,
          p.slug,
          p.title.rendered,
          '',
          media,
          this.authorService.author
        );

        this.postList.push(postOb);
      }
    );

    return this.postList;
  }


  async getPostByID(id: number) {
    let p = await this.http.get<Post>('https://www.corridaurbana.com.br/wp-json/wp/v2/posts/' + id +
      '?&fields=id,slug,title,date,content,author,featured_media').toPromise();
    await this.mediaService.getMediaByID(p.featured_media);

    await this.authorService.getAuthorByID('1');
    console.log('author: ' + this.authorService.author);


    return new Post(id,
      p.date,
      p.slug,
      p.title.rendered,
      p.content.rendered,
      this.mediaService.media,
      this.authorService.author
    );


  }
}
