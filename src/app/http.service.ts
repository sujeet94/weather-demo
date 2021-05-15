import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(url,param?){
    const query = this.generateQuery(param);
  return this.http.get(url +'?'+ query + 'appid='+ environment.API_KEY )
  }

  getCityList(){
    return this.http.get("assets/city.list.json")
  }
  generateQuery(param){
    if(param){
      let str = ''
      param.forEach(element => {
        str = str + `${element.key}=${element.value}&`;
      });
      return str;
    } else {
      return '';
    }
  }
}
