import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurentWeatherComponent } from './curent-weather/curent-weather.component';
import { CityNameComponent } from './city-name/city-name.component';
import { FiveDaysComponent } from './five-days/five-days.component';

@NgModule({
  declarations: [
    AppComponent,
    CurentWeatherComponent,
    CityNameComponent,
    FiveDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
