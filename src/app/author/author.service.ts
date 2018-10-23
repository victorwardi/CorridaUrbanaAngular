import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Author} from '../model/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  author: Author;

  constructor(private http: HttpClient) {
  }


  async getAuthorByID(id: any) {
    const author = await this.http.get<any>('https://www.corridaurbana.com.br/wp-json/wp/v2/users/' + id +
      '?fields=name,avatar_urls.96').toPromise();
    return new Author(id, author.name, author.avatar_urls['96']);
  }

  getAuthor(author: any): Author {
    return new Author(author.id, author.name, author.avatar_urls['96']);
  }


}
