export class Media {

  id: number;
  altText: string;
  caption: string;
  original: string;
  home: string;
  post: string;

  constructor(id: number, altText: string, caption: string, original: string, home: string, post: string) {
    this.id = id;
    this.altText = altText;
    this.caption = caption;
    this.original = original;
    this.home = home;
    this.post = post;
  }
}
