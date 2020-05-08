import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
artistas: any[] = [];
loading: boolean;
  constructor(private spotifyService: SpotifyService) { }

  buscar(termino: string) {
    this.loading = true;
    console.log('termino :' + termino);
    this.spotifyService.getArtistas(termino)
    .subscribe((data: any) => {
      console.log('search artist:' + JSON.stringify(data));
      this.artistas = data;
      this.loading = false;
    });
  }
}
