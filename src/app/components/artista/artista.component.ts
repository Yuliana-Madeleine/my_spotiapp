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
  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      console.log('Artist selected info: ' + params[`id`]);
      this.getArtista(params[`id`]);
    });
  }
  getArtista(id: string) {
    this.spotify.getArtista(id)
    .subscribe(artist => {
      this.artista = artist;
      console.log('Artista info:' + artist);
    });
  }
}
