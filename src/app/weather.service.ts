import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError, filter } from 'rxjs/operators';
import { InputWeather, OutputWeather } from './model/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cityWeatherSub = new Subject<any>();
  cityWeather: Observable<OutputWeather[] | OutputWeather>;
  private apiKey = '8d69e1d2ea361688191863773beb8f78';
  private apiUrl = `https://api.openweathermap.org/data/2.5/`;

  constructor(private router: Router, private http: HttpClient) { }

  getWeather(name: string) {

    if (name) {
      const url = this.apiUrl + `weather?q=${name}&appid=${this.apiKey}&units=metric`;

      this.cityWeather = this.http.get<InputWeather>(url)
        .pipe(
          //  ToDo: забрать только нужны данные из ответа
          map(v => ({
            coord: v.coord,
            temp: v.main.temp,
            feels_like: v.main.feels_like,
            humidity: v.main.humidity,
            pressure: v.main.pressure,
            sky: v.weather[0].main,
            wind_speed: v.wind.speed,
            wind_deg: v.wind.deg,
            city: v.name
          })),
          tap(v => console.log(v))
        );
    }

    if (this.cityWeather) {
      this.cityWeather.subscribe(value => this.cityWeatherSub.next(value));
    }
  }

  getWetaherPrediction(name: string) {
    if (name) {
      const url = this.apiUrl + `/forecast?q=${name}&appid=${this.apiKey}&units=metric`;
      this.cityWeather = this.http.get<InputWeather>(url)
        .pipe(
          map(v => (
            v.list
          )),
          map(val => val.filter((v, i) => i % 8 === 0)),
          map(val => val.map(v => ({
            dt_txt: v.dt_txt,
            temp: v.main.temp,
            feels_like: v.main.feels_like,
            humidity: v.main.humidity,
            pressure: v.main.pressure,
            sky: v.weather[0].main,
            wind_speed: v.wind.speed,
            wind_deg: v.wind.deg,
          }))),
          tap(v => console.log(v))
        );
    }

    if (this.cityWeather) {
      this.cityWeather.subscribe(value => this.cityWeatherSub.next(value));
    }
  }

}
