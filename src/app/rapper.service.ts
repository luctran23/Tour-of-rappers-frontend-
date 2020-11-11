import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rapper } from '../models/rapper';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class RapperService {

  private rapperURL = "http://localhost:3000/rappers";
  
  rappers = this.getRappers();
  
  getRappers(): Observable<Rapper[]> {
    return this.http.get<Rapper[]>(this.rapperURL).pipe(
      tap(receivedRappers => console.log(`received rappers = ${JSON.stringify(receivedRappers)}`)),
      catchError(error => of([]))
    )
  }
  getRapper(id: string): Observable<Rapper> {
    return this.http.get<Rapper>(`http://localhost:3000/rappers/${id}`);
  }
  constructor(private http: HttpClient) { }
}
