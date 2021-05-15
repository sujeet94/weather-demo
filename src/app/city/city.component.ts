import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor( private httpService : HttpService, private snackBar: MatSnackBar,  private router:Router) { }
  mainList;
  cityName: string;
  filteredCityList;
  selectedCity;

  ngOnInit(): void {
     this.httpService.getCityList().subscribe(resp=>{
       this.mainList =JSON.parse(JSON.stringify(resp));
       this.filteredCityList = resp;
     })
  }

  filterCity(param?){
    if(param == 'C') this.cityName = '';
    if(this.cityName && this.cityName.trim()){
      this.filteredCityList = this.mainList.filter(ele=>{
        const name:string = ele.name.toLowerCase()
        return name.startsWith(this.cityName.toLowerCase())
      })
    } else {
      this.filteredCityList = this.mainList;
    }
  };

  getWeaterDetails(){
     if(!this.selectedCity){
       this.snackBar.open("Please Select a City",'',{duration:2000});
     } else {
      this.router.navigate(['/weather',this.selectedCity[0]])
     }
  }

}
