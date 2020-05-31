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
      Authorization : 'Bearer BQBbTC9_2cBJPrwHXTwNKaAQ7P7wqme36NLqu8CF0dAR_OhRWih8fWd9y-JGrkjH-H9q-D_mREAn76qyOqw'
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

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
    .pipe(map((data:any)=> data['tracks'])); //data['tracks'].items
  }
}
