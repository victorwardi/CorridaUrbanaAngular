export class Media {

  id: number;
  altText: string;
  caption: string;
  full: string;
  home: string;
  post: string;

  constructor(id: number, altText: string, caption: string, full: string, home: string, post: string) {
    this.id = id;
    this.altText = altText;
    this.caption = caption;
    this.full = full;
    this.home = home;
    this.post = post;
  }
}
