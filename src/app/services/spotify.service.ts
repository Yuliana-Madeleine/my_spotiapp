import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root' // this help to no add the service into app.module.ts automatic wY TO IMPORT SERVICE
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQAOFpQHBAA5MRmZootoe-CJDWK31NKz91Ja3iAsXFb5BtFFp5pYhX6Uyj6fJ4tO0ONnA2OsnGKApj-16Vc'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases?limit=20`)
    .pipe(map((data: any) => data.albums.items )); // If only have a single 'return' it can be ommited
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&market=us&limit=15`)
    .pipe(map((data: any) => data.artists.items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`)
    .pipe(map((data:any) => data));
  }
}
