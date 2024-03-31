import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root' //Con esto le decimos a angular que creamos un servicio y no tengo necesidad de declararlo en app.module.ts
                     //De esta forma importo automaticamente un servicio
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Spotify service listo');
   }

   getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer '
    });
    
    return this.http.get(url,{headers});
 }

 getNewReleases(){
  
  //const headers = new HttpHeaders({
  //    'Authorization': ''
  //});


  return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( (data:any) => data['albums'].items //De esta forma filtro la información que recibo
                                                        ) );
 }

 getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist`)
                .pipe( map( (data:any) => data['artists'].items ) );
 }

 getArtista(id:string){

  return this.getQuery(`artists/${id}`)
              //.pipe( map( (data:any) => data['artists'].items ) );
 } 

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks`)
                .pipe( map ( (data:any) => data['tracks']));
  }



}
