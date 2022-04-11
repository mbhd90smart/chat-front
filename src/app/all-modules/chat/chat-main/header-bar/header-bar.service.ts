import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeaderBarService {
  // Api Methods for All modules

  public apiurl;

  // Headers Setup
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  
  constructor(private http: HttpClient) {}

  // Handling Errors
  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  // Update Method Api
  lock(user: any, value:boolean): Observable<any> {
    this.apiurl = `api/users/lock/${value}`;
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<any>(url, user, this.httpOptions).pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }

  // Update Method Api
  mute(user: any, value:boolean): Observable<any> {
    this.apiurl = `api/users/mute/${value}`;
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<any>(url, user, this.httpOptions).pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }

  // Update Method Api
  notification(user: any, value:boolean): Observable<any> {
    this.apiurl = `api/users/notification/${value}`;
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<any>(url, user, this.httpOptions).pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }
}
