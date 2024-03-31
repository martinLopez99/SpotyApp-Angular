import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  artista: any = {};
  tracks: any[] = [];
  loading: boolean; 


  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService) {
      
    this.loading = true; 
    this.router.params.subscribe( params =>{    // Asi agarro el id
      console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTrack(params['id']);
    }); 
  }

  getArtista(id:string){
    this.loading = true;
    this.spotify.getArtista(id)
                .subscribe((data:any) =>{
                  console.log(data);
                  this.artista = data;
                  this.loading = false;
                });
  }

  getTopTrack(id:string){
    this.spotify.getTopTracks(id)
                .subscribe((data:any) =>{
                  console.log(data);
                  this.tracks = data;
                });
  }
}
