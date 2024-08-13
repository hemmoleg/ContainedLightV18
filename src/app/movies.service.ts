import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDataJSON } from './MovieData';

@Injectable({providedIn: 'root'})
export class MoviesService {
  
  constructor(private http: HttpClient) {}

   getMovies(){
    //return this.http.get<MovieDataJSON>("assets/movies.json");
   
    return [
      {
        "id": "radiostar",
        "title": "Who Wants To Kill The Radio Star",
        "info": "90min, Contained Thriller, Autumn 2023",
        "logline": "On his Christmas Eve live show a provocative radio host reiveces a mysterious call from a disturbed man on a murder spree against his wife's killers, only to discover that both men are connected by a dark secret",
        "cast": ["Roeland Fernhout"],
        "crew": [
          {"position": "Director", "names":["Lorenz Piehl"]},
          {"position": "Screenwriter", "names":["Michael Knoll"]},
          {"position": "Cinematography", "names":["Conrad Lobst"]},
          {"position": "Production Design", "names":["Nadja Götze"]},
          {"position": "Costume Design", "names":[""]},
          {"position": "Editing", "names":["Robin Jünkersfeld"]},
          {"position": "Original Sound", "names":["Claudio Demel"]},
          {"position": "Sound Design", "names":["Claudio Demel"]},
          {"position": "Producers", "names":["Lorenz Piehl", "Michael Knoll", "Michael Luda", "Alexander Tanz"]}
        ]
      }
    ];
  }
}