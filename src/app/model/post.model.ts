import {Author} from "./author.model";
import {Media} from "./media.model";

export class Post {

  id: number;
  date: Date;
  slug: string;
  title: string;
  content: string;
  featuredImage: Media;
  author: Author;


  constructor(id: number, date: Date, slug: string, title: string, content: string, featuredImage: Media, author: Author) {
    this.id = id;
    this.date = date;
    this.slug = slug;
    this.title = title;
    this.content = content;
    this.featuredImage = featuredImage;
    this.author = author;
  }


}
