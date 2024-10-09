import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movieForm: FormGroup;
  movies;
  selectedMovieId: string | null = null;
  search: any;

  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.movieForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      posterUrl: ['', Validators.required],
      title: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1888), Validators.max(new Date().getFullYear())]],
      description: ['', Validators.required],
    });

    this.search = this.fb.group(
      {
        searchInput: ['']
      }
    );
  }
  ngOnInit() {
    this.getMovies();
  }

  //ADD MOVIES (CREATE)
  // addMovies() {
  //   this.movies = this.movieService.addMovie(this.movies).subscribe(
  //     (response) => console.log(response)
  //   );
  // }

  //GET MOVIES (READ)
  getMovies() {
    this.movieService.getMovies().subscribe(
      (res) => {
        this.movies = res;
        console.log(res);

      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  //UPDATE MOVIE BY ID (PUT)
  //DELETE MOVIE BY ID (DELETE)
  deleteMovie(id) {
    this.movieService.deleteMovie(id).subscribe(
      (res) => {
        console.log("Movie deleted sucessfully")
        this.getMovies();
      }

    )
  }

  onSearch() {
    const searchInput = this.search.get('searchInput')?.value;
    if (searchInput) {
      this.movieService.searchMovie(searchInput).subscribe(
        (res) => {
          console.log(res);
          this.movies = res;
        }
      )
    } else {
      this.getMovies();
    }
  }


  closeForm() {
    this.selectedMovieId = null;
    this.resetForm();
  }

  resetForm() {
    this.movieForm.reset();
    this.selectedMovieId = null;
    this.movieForm.patchValue({ id: '' });
  }
}
