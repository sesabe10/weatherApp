import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './pages/weather/weather.component';
import { CityComponent } from './components/city/city.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StringClean } from './helpers/string-clean/string-clean';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CityComponent,
  ],
  imports: [
    StringClean,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
