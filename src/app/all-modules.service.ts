import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AllModulesData } from 'src/assets/all-modules-data/all-modules-data';
import { id } from 'src/assets/all-modules-data/id';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AllModulesService {
  // Chats

  groups = {
    active: '',
    total: ['general', 'video responsive survey', '500rs', 'warehouse'],
  };
  members = {
    active: 'Mike Litorus',
    total: [
      { name: 'John Doe', count: 3 },
      { name: 'Richard Miles', count: 0 },
      { name: 'John Smith', count: 7 },
      { name: 'Mike Litorus', count: 9 },
    ],
  };

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

  // Get Method Api
  get(type): Observable<AllModulesData[]> {
    this.apiurl = `${environment.api}/${type}`;
    return this.http.get<AllModulesData[]>(this.apiurl).pipe(
      tap((data) => console.log()),
      catchError(this.handleError)
    );
}

recovery(data:any): Observable<any> {
  this.apiurl = `${environment.api}/recovery`;
  
  return this.http.get<any>(this.apiurl, {
    params:{
      ...data,
      securitycode:environment.securitycode
    },
    ...this.httpOptions
    }).pipe(
    tap((data) => console.log(data)),
    catchError(this.handleError)
  );
}

passcode(data:any): Observable<any> {
  this.apiurl = `${environment.api}/password`;
  
  return this.http.get<any>(this.apiurl, {
    params:{
      ...data,
      securitycode:environment.securitycode
    },
    ...this.httpOptions
    }).pipe(
    tap((data) => console.log(data)),
    catchError(this.handleError)
  );
}

login(data:any): Observable<any> {
  this.apiurl = `${environment.api}/login`;
  
  return this.http.get<any>(this.apiurl, {
    params:{
      ...data,
      securitycode:environment.securitycode
    },
    ...this.httpOptions
    }).pipe(
    tap((data) => console.log(data)),
    catchError(this.handleError)
  );
}

register(data:any): Observable<any> {
  this.apiurl = `${environment.api}/register`;
  
  return this.http.post<any>(this.apiurl, {
    ...data,
    securitycode:environment.securitycode
  }, this.httpOptions).pipe(
    tap((data) => console.log(data)),
    catchError(this.handleError)
  );
}
//environment
  // Post Method Api
  add(user: any, type): Observable<any> {
    this.apiurl = `${environment.api}/${type}`;
    user.id = null;
    return this.http.post<any>(this.apiurl, user, this.httpOptions).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  // Update Method Api
  update(user: any, type): Observable<any> {
    this.apiurl = `${environment.api}/${type}`;
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<any>(url, user, this.httpOptions).pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }

  // Delete Method Api
  delete(id: id, type): Observable<id> {
    this.apiurl = `${environment.api}/${type}`;
    const url = `${this.apiurl}/${id}`;
    return this.http
      .delete<id>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
