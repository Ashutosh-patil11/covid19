import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service' 
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries:any
  country:any
  Confirmed:Number
  Recovered:Number
  Deaths:Number
  Date:Date
  Active:Number
  Country:String
  TotalConfirmed:Number
  TotalDeaths:Number
  TotalRecovered:Number
  imgUrl:Text
  khand:Text
  popu:Number
  Critical:Number
  Tests:Number
  Todaycases:Number
  Todaydeaths:Number
  Todayrecoverd:Number
  Onecase:Number
  Onedeath:Number
  Onetest:Number
  Millioncases:Number
  Milliontests:Number
  Milliondeaths:Number
  Millionactive:Number
  Millionrecoverd:Number
  Millioncritical:Number

  isDisplay = false;

  constructor(private corona:CoronaService){}

  ngOnInit()
  {
    this.corona.getCountries().subscribe((data) =>
    {
      console.log(data)
      this.countries = data
    })
    this.getworldtotal()
  }

  getCoronaData(){
    this.corona.getCoronaRealData(this.country).subscribe((data)=>{
      console.log(data)
      this.Confirmed = data.cases
      this.Recovered = data.recovered
      this.Deaths = data.deaths
      this.Active = data.active
      this.Country = data.country
      this.imgUrl = data.countryInfo.flag
      this.khand = data.continent
      this.popu = data.population
      this.Critical = data.critical
      this.Tests = data.tests
      this.Todaycases = data.todayCases
      this.Todaydeaths = data.todayDeaths
      this.Todayrecoverd = data.todayRecovered
      this.Onecase = data.oneCasePerPeople
      this.Onedeath = data.oneDeathPerPeople
      this.Onetest = data.oneTestPerPeople
      this.Millioncases = data.casesPerOneMillion
      this.Milliontests = data.testsPerOneMillion
      this.Milliondeaths = data.deathsPerOneMillion
      this.Millionactive = data.activePerOneMillion
      this.Millionrecoverd = data.recoveredPerOneMillion
      this.Millioncritical = data.criticalPerOneMillion

      this.isDisplay = true
    })
  }

  getCountry(country:any)
  {
    this.country = country
  }

  getworldtotal(){
    this.corona.getTotal().subscribe((data)=>{
      console.log(data)
      
      this.TotalConfirmed = data.TotalConfirmed
      this.TotalDeaths = data.TotalDeaths
      this.TotalRecovered = data.TotalRecovered
    })
  }

}


