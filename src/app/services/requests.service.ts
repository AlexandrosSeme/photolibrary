import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private baseUrl = 'https://picsum.photos/v2/list';
  constructor(private http: HttpClient) { }


  getPhotos(page: number = 1, limit: number = 6): Observable<any[]> {
    const url = `${this.baseUrl}?page=${page}&limit=${limit}`;
    return this.http.get<any[]>(url).pipe(
      tap((data) => console.log('Fetched:', data)),
      catchError((error) => {
        console.error('Error fetching photos:', error);
        return throwError(() => error);
      })
    );
  }
}
