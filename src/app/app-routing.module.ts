import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  {path : "", component:CityComponent},
  {path : "city", component:CityComponent},
  {path: "weather",redirectTo:"city"},
  {path: "weather/:id",component:CityWeatherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
