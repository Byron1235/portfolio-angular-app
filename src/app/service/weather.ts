import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Weather {

  private apiUrl = '/api/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string, country: string) {
    return this.http.get(`${this.apiUrl}?city=${city},${country}`);
  }
}

