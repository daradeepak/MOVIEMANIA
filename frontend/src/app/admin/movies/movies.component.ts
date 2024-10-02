import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieForm: FormGroup;
  selectedFile: File | null = null;
  movies: any[] = [];
  selectedMovieId: string | null = null;

  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.movieForm = this.fb.group({
      id: [{ value: '', disabled: true }], // Add the id control and set it as disabled
      title: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1888), Validators.max(new Date().getFullYear())]],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadMovies();
  }

  // Load all movies
  loadMovies() {
    this.movieService.getMovies().subscribe(
      (res) => {
        this.movies = res;
      },
      (error) => {
        console.error('Error loading movies:', error);
      }
    );
  }

  // Capture the selected file
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Handle form submission for adding or updating movies
  onSubmit() {
    const formData = new FormData();

    // Append movie data to formData
    formData.append('movie', JSON.stringify(this.movieForm.value));

    // Append the selected file (poster)
    if (this.selectedFile) {
      formData.append('poster', this.selectedFile);
    }

    // Check if we're updating or adding a new movie
    if (this.selectedMovieId) {
      // Update movie
      this.movieService.updateMovie(this.selectedMovieId, formData).subscribe(
        response => {
          console.log('Movie updated successfully!', response);
          this.resetForm();
          this.loadMovies(); // Reload the movies list
        },
        error => {
          console.error('Error updating movie', error);
        }
      );
    } else {
      // Add new movie
      this.movieService.addMovie(formData).subscribe(
        response => {
          console.log('Movie uploaded successfully!', response);
          this.resetForm();
          this.loadMovies(); // Reload the movies list
        },
        error => {
          console.error('Error uploading movie', error);
        }
      );
    }
  }

  // Handle update button click to load the movie for editing
  updateMovie(movie: any) {
    this.selectedMovieId = movie.id;
    this.movieForm.patchValue({
      id: movie.id, // Set the id value
      title: movie.title,
      year: movie.year,
      description: movie.description
    });
  }

  // Handle movie deletion
  deleteMovie(id: string) {
    this.movieService.deleteMovie(id).subscribe(
      response => {
        console.log('Movie deleted successfully!', response);
        this.loadMovies();
      },
      error => {
        console.error('Error deleting movie', error);
      }
    );
  }

  closeForm() {
    this.selectedMovieId = null; // Reset the selected movie ID
    this.resetForm(); // Reset the form
  }

  // Reset the form after submission
  resetForm() {
    this.movieForm.reset();
    this.selectedFile = null;
    this.selectedMovieId = null;
    this.movieForm.patchValue({ id: '' }); // Reset id value
  }
}
