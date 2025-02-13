import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { WeatherData } from '../interface/weather-data';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private https: HttpClient) { }

  uri:string = environment.apiUrl 
  id: string = environment.id

  getData(city: string): Observable<WeatherData>{
    return this.https.get<WeatherData>(`${this.uri + 'q=' + city + '&appid=' + this.id + '&units=metric'}`)
    .pipe(catchError(this.handleError));
  }

  getCurrentLocation(latitude: number, longitude: number): Observable<any>{
    return this.https.get<any>(this.uri + "lat=" + latitude + "&lon=" + longitude + "&appid=" + this.id);
  }
  
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.statusText === 'Not Found') {
      errorMessage = 'City not found. Please check the name.';
    }
    return throwError(() => new Error(errorMessage));
  }
}