import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  TodaysCases:Number
  TodayDeath:Number
  TodayRecovered:Number
  TotalActive:Number
  TotalCritical:Number
  Casespermillion:Number
  Deathspermillion:Number
  TotalTests:Number
  Testspermillion:Number
  WorldPopulation:Number
  Activepermillion:Number
  Recoverdpermillion:Number
  Criticalpermillion:Number
  AffectedCountry:Number


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
  getworldtotal(){
    this.corona.getTotal().subscribe((data)=>{
      console.log(data)
      
      this.TotalConfirmed = data.cases
      this.TotalDeaths = data.deaths
      this.TotalRecovered = data.recovered
      this.TodaysCases = data.todayCases
      this.TodayDeath = data.todayDeaths
      this.TodayRecovered = data.todayRecovered
      this.TotalActive = data.active
      this.TotalCritical = data.critical
      this.Casespermillion = data.casesPerOneMillion
      this.Deathspermillion = data.deathsPerOneMillion
      this.TotalTests = data.tests
      this.Testspermillion = data.testsPerOneMillion
      this.WorldPopulation = data.population
      this.Activepermillion = data.activePerOneMillion
      this.Recoverdpermillion = data.recoveredPerOneMillion
      this.Criticalpermillion = data.criticalPerOneMillion
      this.AffectedCountry = data.affectedCountries
    })
  }

}