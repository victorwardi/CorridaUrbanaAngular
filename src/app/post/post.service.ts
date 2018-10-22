import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../model/post.model';
import {MediaService} from '../media/media.service';
import {AuthorService} from '../author/author.service';
import {Author} from '../model/author.model';
import {Media} from '../model/media.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post: Post;
  author: Author;

  constructor(private http: HttpClient, private mediaService: MediaService, private authorService: AuthorService) {
  }

  async getPostsByCategory() {

    const t0 = performance.now();

    const postList: Post[] = [];

    const list = await this.http.get<any[]>(
      'https://www.corridaurbana.com.br/wp-json/wp/v2/posts/?_embed&&fields=id,slug,title,date,_embedded,_embedded.wp:featuredmedia'
    ).toPromise();

    for (const p of list) {
      // console.log('Loading post: ' + p.title.rendered);
      // console.log('Getting image...');
      // const media = await this.mediaService.getMediaByID(p.featured_media);
      // console.log('Image loaded: ' + media.post);
      // console.log('Getting author...');
      // const author = await this.authorService.getAuthorByID('1');
      // console.log('Author loaded: ' + author.name);

console.log( p._embedded['wp:featuredmedia'][0]);

      const postOb = new Post(p.id,
        p.date,
        p.slug,
        p.title.rendered,
        '',
        this.mediaService.getMedia(p._embedded['wp:featuredmedia'][0]),
        null
      );

      postList.push(postOb);

    }

    const t1 = performance.now();

    console.log('it takes: ' + (t1 - t0));

    return postList;
  }


  async getPostsByCategoryAsync() {

    const t0 = performance.now();

    const postList: Post[] = [];

    const list = await this.http.get<any[]>(
      'https://www.corridaurbana.com.br/wp-json/wp/v2/posts/?&fields=id,slug,title,date,author,featured_media'
    ).toPromise();


    const promises = list.map(
      async p => {
        // console.log('Loading post: ' + p.title.rendered);
        // console.log('Getting image...');
        // const media = await this.mediaService.getMediaByID(p.featured_media);
        // console.log('Image loaded: ' + media.post);
        // console.log('Getting author...');
        // if (this.author === null || this.author.id !== p.author) {
        //   this.author = await this.authorService.getAuthorByID(p.author);
        // }
        // console.log('Author loaded: ' + this.author.name);

        const postOb = new Post(p.id,
          p.date,
          p.slug,
          p.title.rendered,
          '',
          null,
          null
        );
        postList.push(postOb);

      }
    );

    await Promise.all(promises);

    const t1 = performance.now();

    console.log('it takes: ' + (t1 - t0));

    return postList;
  }


  async getPostByID(id: any) {
    const p = await this.http.get<any>('https://www.corridaurbana.com.br/wp-json/wp/v2/posts/' + id +
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
