import { Component, OnInit } from '@angular/core';

import { MovieData } from '../MovieData';
import { MoviesService } from '../movies.service';

@Component({
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.less']
})
export class MovieSelectionComponent implements OnInit {

  movies: MovieData[] = [];

  tests = ["foo1", "foo2", "foo3", "foo4",]

  constructor(private moviesService: MoviesService) { 
    // this.moviesService.getMovies().subscribe(data => {
    //   this.movies = data.movies;
    // })
    this.movies = this.moviesService.getMovies();
  }

  ngOnInit(): void {
  }

}
