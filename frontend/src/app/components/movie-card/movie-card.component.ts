import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  movieDetails: any;
  userReviewForm: FormGroup;

  constructor(private _movieService: MovieService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.userReviewForm = this.fb.group({
      userReview: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    const movieId = this.route.snapshot.paramMap.get('id');
    this._movieService.getMovieById(movieId).subscribe(
      (res) => {
        this.movieDetails = res;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }

  submitReview() {
    if (this.userReviewForm.valid) {
      const review = this.userReviewForm.value.userReview;
      console.log('Review submitted:', review);
    }
  }
}
