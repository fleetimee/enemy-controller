import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public weather = {};
  public temp = 0;
  public city = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getData().subscribe(result => {
      this.weather = result;
      this.temp = result.main.temp;
      this.city = result.name;
      console.log(this.weather);
    });
  }

}
