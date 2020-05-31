import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      this.loadingArtist = true;
      // console.log('Artist selected info: ' + params[`id`]);
      this.getArtista(params[`id`]);
      this.getTopTracks(params[`id`]);
    });
  }
  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtista(id)
    .subscribe(artist => {
      this.artista = artist;
      this.loadingArtist = false;
      console.log('Artista info:' + this.artista);
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
    .subscribe(toptracks => {
      console.log('Top Tracks info:' + JSON.stringify(toptracks));
      this.topTracks = toptracks;
    });
  }
}

