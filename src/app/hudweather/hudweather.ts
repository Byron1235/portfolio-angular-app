import { Component, OnInit } from '@angular/core';
import { Weather } from '../service/weather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hudweather',
  standalone: true,
  templateUrl: './hudweather.html',
  styleUrls: ['./hudweather.css'],
  imports: [CommonModule]
})
export class Hud implements OnInit {

  weather: any = null;
  date = new Date();

  constructor(private weatherService: Weather) {}

  ngOnInit() {
    this.weatherService.getWeather('Parral', 'CL')
      .subscribe(data => this.weather = data);

    setInterval(() => this.date = new Date(), 1000);
  }
}
