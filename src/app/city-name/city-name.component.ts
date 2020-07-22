import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-city-name',
  templateUrl: './city-name.component.html',
  styleUrls: ['./city-name.component.css']
})
export class CityNameComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(cityName: string) {
    this.weatherService.getWeather(cityName);
  }

  getWetaherPrediction(cityName: string){
    this.weatherService.getWetaherPrediction(cityName);
  }

}
