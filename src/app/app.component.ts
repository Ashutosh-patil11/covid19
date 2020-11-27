import { Component } from '@angular/core';
import { CoronaService } from './services/corona.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid19';

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

      var index = data.length - 1
      this.Confirmed = data[index].Confirmed
      this.Recovered = data[index].Recovered
      this.Deaths = data[index].Deaths
      this.Date = data[index].Date
      this.Active = data[index].Active
      this.Country = data[index].Country
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
