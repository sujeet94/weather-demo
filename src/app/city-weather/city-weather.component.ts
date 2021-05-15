import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private httpService :HttpService) { }
  cityId
  cityData;
  displayedColumns: string[] = ['date', 'weather', 'temp', 'humidity', 'wind', 'visibility'];
  dataSource = new MatTableDataSource([]);

  ngOnInit(): void {
    this.cityId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.cityId){
      this.httpService.getData(environment.MAIN+environment.FORECAST, [{key:'id',value:this.cityId}])
      .subscribe(resp=>{
        this.cityData = this.mapData(resp);
        this.dataSource = new MatTableDataSource(this.cityData.weather)
      });
    }

  }

  mapData(resp){
    let weatherDetails = {};
    if (!resp || resp.cod != "200") return weatherDetails;
    let weather = resp.list;
    weather = resp.list.map(ele=>{
      return {
        date :this.convertDate(ele.dt_txt),
        visibility:ele.visibility,
        temp : (ele.main.temp-273.15).toFixed(2),
        humidity : ele.main.humidity,
        weather: ele.weather[0].description,
        wind : ele.wind.speed,

      }
    })
    return {...resp.city, weather: weather}

  };
  convertDate(dateStr){
    let time;
  let dateTime =  dateStr.split(' ');
    return {date: dateTime[0],time:dateTime[1]};
  }

  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}
