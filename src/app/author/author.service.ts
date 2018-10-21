import {Injectable} from '@angular/core';
import {Media} from "../model/media.model";
import {HttpClient} from "@angular/common/http";
import {Event} from "../model/event.model";
import {Author} from "../model/author.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  author: Author;

  constructor(private http: HttpClient) {
  }

  async getAuthorByID(id: string) {
    let author = await this.http.get<Author>('https://www.corridaurbana.com.br/wp-json/wp/v2/users/' + id + '?fields=name,avatar_urls.96').toPromise();
    this.author =  new Author(parseInt(id), author.name, author.avatar_urls['96']);
  }

}
