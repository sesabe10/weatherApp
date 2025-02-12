import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StringClean } from 'src/app/helpers/string-clean/string-clean';
import { WeatherData } from 'src/app/interface/weather-data';
import { WeatherService } from 'src/app/service/weather.service';

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
  data: boolean = false;

  constructor(private weatherService: WeatherService, private fb: FormBuilder, private clean: StringClean) {    

    this.inputCity = this.fb.group({
      city: ['', [Validators.required, Validators.minLength(2)]]
    });   
  }  

  ngAfterViewInit() {
    this.videoElement.nativeElement.src = this.videoUrl;
  }

  getWeather(){  

      this.weatherService.getData(this.inputCity.value.city).subscribe((city ) => {{          

        this.weather = city       
        this.data = true;
        this.inputCity.reset();
      }});
  }  
}