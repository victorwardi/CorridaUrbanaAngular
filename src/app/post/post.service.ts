import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../model/post.model';
import {MediaService} from '../media/media.service';
import {AuthorService} from '../author/author.service';
import {Author} from '../model/author.model';
import {CacheRegistrationService} from '../cache/cache-registration.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post: Post;
  author: Author;

  constructor(private http: HttpClient, private mediaService: MediaService,
              private authorService: AuthorService, private cacheRegistration: CacheRegistrationService) {}

  async getPostsByCategory() {

     const url = 'https://www.corridaurbana.com.br/wp-json/wp/v2/posts/?_embed&fields=id,slug,title,' +
       'date,_embedded.wp:featuredmedia,_embedded.author';

    const t0 = performance.now();

    const postList: Post[] = [];

    this.cacheRegistration.addToCache(url);
    const list = await this.http.get<any[]>(url).toPromise();

    for (const p of list) {
      const postOb = new Post(p.id,
        p.date,
        p.slug,
        p.title.rendered,
        '',
        this.mediaService.getMedia(p._embedded['wp:featuredmedia'][0]),
        this.authorService.getAuthor(p._embedded['author'][0])
      );

      postList.push(postOb);

    }

    const t1 = performance.now();

    console.log('it takes: ' + (t1 - t0));

    return postList;
  }

  async getPostByID(id: any) {

    const url = 'https://www.corridaurbana.com.br/wp-json/wp/v2/posts/' + id +
      '?_embed&&fields=id,slug,title,date,content,_embedded.wp:featuredmedia,_embedded.author';
    this.cacheRegistration.addToCache(url);

    const p = await this.http.get<any>(url).toPromise();

    return new Post(id,
      p.date,
      p.slug,
      p.title.rendered,
      p.content.rendered,
      this.mediaService.getMedia(p._embedded['wp:featuredmedia'][0]),
      this.authorService.getAuthor(p._embedded['author'][0])
    );


  }
}
