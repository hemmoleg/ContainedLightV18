import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieData } from '../MovieData';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.less']
})
export class MovieComponent implements OnInit {

  movie: MovieData | undefined;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {
    const routeParams = this.route.snapshot.paramMap;
    const movieIDFromRoute = String(routeParams.get('movieID'));

    // this.moviesService.getMovies().subscribe(data => {
    //   this.movie = data.movies.find(movie => movie.id == movieIDFromRoute);
    // })
    this.movie = this.moviesService.getMovies().find(movie => movie.id == movieIDFromRoute);
  }

  ngOnInit(): void {
  }

}
