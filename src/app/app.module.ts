import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CountriesComponent } from './countries/countries.component';
import { RouterModule, Routes } from '@angular/router';
import { WhatcovidComponent } from './whatcovid/whatcovid.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PreventionComponent } from './prevention/prevention.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AllComponent } from './all/all.component';
const appRoutes:Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'world',
    component: HeaderComponent
  },
  {
    path: 'countries',
    component: CountriesComponent
  },
  {
    path: 'WhatIsCovid',
    component: WhatcovidComponent
  },
  {
    path: 'preventions',
    component: PreventionComponent
  },
  {
    path: 'symptoms',
    component: SymptomsComponent
  },
  {
    path: 'allcountries',
    component: AllComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountriesComponent,
    WhatcovidComponent,
    SymptomsComponent,
    PreventionComponent,
    FooterComponent,
    AllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
