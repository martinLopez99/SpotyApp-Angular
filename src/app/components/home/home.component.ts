import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean; 
  error:boolean;
  mensajeError:string;
  
  constructor(private http:HttpClient, private spotify:SpotifyService) {                                       

    this.loading = true; // Esta va a ser mi referencia de cuando la pantalla esta cargando o no
    this.error = false;
    this.mensajeError = '';
    this.spotify.getNewReleases()
                  .subscribe((data:any) => { //Angual no sabe como viene el formato, por lo que para acceder a 
                      console.log(data);  // albums.item, debo de especificar data:any

                      this.nuevasCanciones = data;
                      this.loading = false;
                  }
                  ,(errorServicio) =>{
                    this.loading = false;
                    this.error = true;
                    console.log(errorServicio);
                    console.log(errorServicio.error.error.message);
                    this.mensajeError = errorServicio.error.error.message;
                  });

  }

  ngOnInit(): void {
    
  }


}
