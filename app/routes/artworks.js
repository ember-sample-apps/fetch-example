import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class ArtworksRoute extends Route {
  async model() {
    const response = await fetch(
      'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,artist_display,date_display,thumbnail,image_id'
    );

    const artResponse = await response.json();

    const artworks = artResponse.data;

    // const artArray = Object.keys(artworks);
    // console.log(artworks.data);
    console.log(artworks);

    return { artworks };
  }
}
