import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Media} from "../model/media.model";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  media: Media;

  constructor(private http: HttpClient) {
  }


  async getMediaByID(id: string) {
    let media = await this.http.get<Media>('https://www.corridaurbana.com.br/wp-json/wp/v2/media/' + id +
      '?&fields=id,alt_text,' +
      'caption.rendered,media_details.sizes.full,' +
      'media_details.sizes.curb-post-image,' +
      'media_details.sizes.curb-home-image').toPromise();

        //images url
        const mediaPath = media.media_details.sizes;
        const full =  mediaPath.full.source_url;
        const home = mediaPath.curb_home == null ? full: mediaPath.curb_home.source_url;
        const post = mediaPath.curb_post == null ? full: mediaPath.curb_post.source_url;

        this.media =  new Media(parseInt(id),
          media.alt_text,
          media.caption == null ? '' : media.caption.rendered == null,
            full, home, post
        );

        console.log(this.media);

  }
}
