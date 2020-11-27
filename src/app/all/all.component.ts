import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service' 
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  countries: any
  country: Text
  flag: Text
  cases: Text
  death: Text
  active: Text
  recoverd: Text

  constructor(private corona:CoronaService) { }

  ngOnInit(): void {
    this.corona.getCountries().subscribe((data) =>
    {
      console.log(data)
      this.countries = data
    })
    this.showCountries()
  }
  
  showCountries(){
    this.corona.getCountries().subscribe((data)=>{
      console.log(data)
      
      this.country = data.country
      
    })
  }

}

