import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public whList;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getForecast().subscribe(result => {
      this.whList = result['list'];
    });
  }

}
