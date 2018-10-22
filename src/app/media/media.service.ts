import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Media} from '../model/media.model';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  media: Media;

  constructor(private http: HttpClient) {
  }


  async getMediaByID(id: any) {
    const media = await this.http.get<any>('https://www.corridaurbana.com.br/wp-json/wp/v2/media/' + id +
      '?&fields=id,alt_text,source_url,' +
      'caption,media_details.sizes').toPromise();

    // images url
    const mediaPath = media.media_details;
    const original = media.source_url;
    const hasSizes = mediaPath.sizes == null ? false : true;
    const home = hasSizes && mediaPath.sizes.curb_home != null ?  mediaPath.sizes.curb_home.source_url : original;
    const post = hasSizes && mediaPath.sizes.curb_post != null ?  mediaPath.sizes.curb_post.source_url : original;
    const caption = media.caption == null ? '' : media.caption.rendered;

    this.media = new Media(id, media.alt_text, caption, original, home, post);

    return new Media(id, media.alt_text, caption, original, home, post);

  }



   getMedia(media: any): Media {
    // images url
    const mediaPath = media.media_details;
    const original = media.source_url;
    const hasSizes = mediaPath.sizes == null ? false : true;
    const home = hasSizes && mediaPath.sizes.curb_home != null ?  mediaPath.sizes.curb_home.source_url : original;
    const post = hasSizes && mediaPath.sizes.curb_post != null ?  mediaPath.sizes.curb_post.source_url : original;
    const caption = media.caption == null ? '' : media.caption.rendered;

    return new Media(media.id, media.alt_text, caption, original, home, post);

  }

}
