import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = "http://localhost:8080/users";

  constructor(private _http: HttpClient) { }

  // GET USERS
  public getUsers(): Observable<any> {
    return this._http.get(`${this._url}/users`);
  }

  // POST ADD
  public addUser(user: any): Observable<any> {
    return this._http.post(`${this._url}/signup`, user);
  }

  // DELETE USER
  public deleteUser(id: string): Observable<any> {
    return this._http.delete(`${this._url}/delete/${id}`, { responseType: 'text' });
  }

  // PUT (UPDATE) USER
  public updateUser(id: string, user: any): Observable<any> {
    return this._http.put(`${this._url}/update-user/${id}`, user);
  }

  //CHECK USER LOGIN
  public loginUser(user: any): Observable<any> {
    return this._http.post(`${this._url}/login`, user);
  }

  //SEARCH USER
  public searchUser(name: any): Observable<any> {
    return this._http.get(`${this._url}/searchByName/${name}`);
  }
}
