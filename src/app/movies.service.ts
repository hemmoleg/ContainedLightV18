import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDataJSON } from './MovieData';

import * as moviesJson from '../assets/movies.json';

@Injectable({providedIn: 'root'})
export class MoviesService {
  
  constructor(private http: HttpClient) {}

   getMovies(){

     //return this.http.get<MovieDataJSON>("assets/movies.json");
     return moviesJson.movies;
  }
}