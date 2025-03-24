import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private userProfileUrl = 'https://picsum.photos/list';
  constructor(private http: HttpClient) { }


  getPhotos() {
    return this.http.get<any[]>(this.userProfileUrl).pipe(
      tap((Data) => { }),
      catchError((err) => {
        throw err
      }));
  }
}
