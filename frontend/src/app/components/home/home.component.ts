import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any[] = [];

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this._movieService.getMovies().subscribe((res) => {
      this.movies = res;
      console.log('Fetched movies:', this.movies); // Log fetched movies for debugging
    });
  }
}
