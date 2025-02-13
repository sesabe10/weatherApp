import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherData } from 'src/app/interface/weather-data';
import { WeatherService } from 'src/app/service/weather.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  @ViewChild('video', { static: false }) videoElement!: ElementRef;

  videoUrl: string = 'assets/video/clouds.webm';
  inputCity: FormGroup;
  weather!: WeatherData;
  show: boolean = false;
  weatherIconUrl: string = '';

  constructor(private weatherService: WeatherService, private fb: FormBuilder) {

    this.inputCity = this.fb.group({
      city: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngAfterViewInit() {
    this.videoElement.nativeElement.src = this.videoUrl;
  }

  getWeather() {
    this.weatherService.getData(this.inputCity.value.city).subscribe({
      next: (city) => {

        this.weather = city
        this.weatherIconUrl = environment.icon + city.weather[0].icon + ".png";                      
        this.show = true;
        this.inputCity.reset();
      },
      error: (err) => {
        alert(err)
        this.inputCity.reset();
      }
    });
  }
}