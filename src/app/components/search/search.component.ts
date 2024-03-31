import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas: any[] = [];

  constructor(private spotify:SpotifyService) {
    
  }

  buscar(termino:string){
    
    return this.spotify.getArtistas(termino)
                        .subscribe((data:any) => {
                          this.artistas = data; 
                          
                        });
  }
}
