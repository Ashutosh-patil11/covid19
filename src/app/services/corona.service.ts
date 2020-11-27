import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) { }

  getCountries():Observable<any>
  {
    const url = "https://disease.sh/v3/covid-19/countries"
    return this.http.get<any>(url)
  }

  getCoronaRealData(country):Observable<any>
  {
     const url = "https://disease.sh/v3/covid-19/countries/"+ country
     return this.http.get<any>(url)
  }

getTotal():Observable<any>
{
  const url = "https://disease.sh/v3/covid-19/all"
  return this.http.get<any>(url)
}


}
