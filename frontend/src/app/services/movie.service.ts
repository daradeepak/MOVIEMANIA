import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _url = 'http://localhost:8080/movies';

  constructor(private _http: HttpClient) { }

  //ADMIN ADD MOVIE
  addMovie(movieData: FormData): Observable<any> {
    return this._http.post(`${this._url}/upload-movie`, movieData);
  }

  //GET MOVIES HOME*
  getMovies(): Observable<any> {
    return this._http.get(`${this._url}/get-movies`);
  }

  // GET MOVIE BY ID
  getMovieById(movieId: string): Observable<any> {
    return this._http.get(`${this._url}/get-movie/${movieId}`);
  }

  //UPDATE MOVIE BY ID 
  updateMovie(movieId: string, formData: FormData) {
    return this._http.put(`${this._url}/update-movie/${movieId}`, formData);
  }




  //DELETE MOVIE BY ID
  deleteMovie(id) {
    return this._http.delete(`${this._url}/delete-movie/${id}`);
  }
}
