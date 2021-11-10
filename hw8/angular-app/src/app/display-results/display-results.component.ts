import {Component, Input, OnInit} from '@angular/core';
import {WeatherapiService} from "../weatherapi.service";
import { DailyData, HourlyData } from "../app.models";
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent implements OnInit {
  dailyData: DailyData[] = [];
  hourlyData: HourlyData[] = [];
  leftVisible: boolean = true;
  selectedDay?: DailyData;
  tweetUrl?: string;

  onClickDay(day: DailyData) {
    console.log(day);
    this.selectedDay = day;
    this.leftVisible = false;

    let text = "The temperature in " + this.weatherapiService.locationData.address +
      " on " + this.selectedDay.date + " is " + this.selectedDay.temperature + " °F. The weather conditions are " +
      this.selectedDay.statusString.toLowerCase();
    let params = new HttpParams()
      .set("text", text)
      .set("hashtags", "CSCI571WeatherSearch");
    this.tweetUrl = "https://twitter.com/intent/tweet?" + params.toString();
  }

  constructor(public weatherapiService: WeatherapiService) { }

  ngOnInit(): void {
    this.dailyData = this.weatherapiService.dailyData;
    console.log("dailyData", this.dailyData);
    this.hourlyData = this.weatherapiService.hourlyData;
    console.log("hourlyData", this.hourlyData);

  }

}