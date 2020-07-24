import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-curent-weather',
  templateUrl: './curent-weather.component.html',
  styleUrls: ['./curent-weather.component.css']
})
export class CurentWeatherComponent implements OnInit {

  curentWeather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.cityWeatherSub.subscribe(weather => this.curentWeather = weather);
  }

}
