import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/model/user'; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/user';
  loginUrl = "http://localhost:5000/api/user/login";
  private authTokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem(this.authTokenKey, response.token);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  logout() {
    localStorage.removeItem(this.authTokenKey);
  }
}
