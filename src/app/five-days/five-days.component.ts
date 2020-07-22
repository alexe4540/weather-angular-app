import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-five-days',
  templateUrl: './five-days.component.html',
  styleUrls: ['./five-days.component.css']
})
export class FiveDaysComponent implements OnInit {
  curentWeather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.cityNameSub.subscribe(weather => this.curentWeather = weather);
  }

}
