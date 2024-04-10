import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  getMovieData():Observable<any>{
    return this.httpClient.get('https://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27')
  }
}
