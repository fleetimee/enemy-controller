import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = 'b7e801c60cd9e8fe1bcee860567be8d7';
  city = 'Boston';
  
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  }

  getForecast(){
    return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
  }
}
