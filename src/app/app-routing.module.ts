import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurentWeatherComponent } from './curent-weather/curent-weather.component';
import { FiveDaysComponent } from './five-days/five-days.component';


const routes: Routes = [
  {path: 'curent', component: CurentWeatherComponent},
  {path: 'five_days', component: FiveDaysComponent},
  {path: '', redirectTo: '/curent', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
