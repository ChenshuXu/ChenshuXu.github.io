import {Component, Input, OnInit} from '@angular/core';
import {WeatherapiService} from "../weatherapi.service";
import { DailyData, HourlyData } from "../app.models";
import { HttpParams } from '@angular/common/http';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
import windbard from 'highcharts/modules/windbarb.src'
HC_more(Highcharts);
windbard(Highcharts);
declare function Meteogram(json: any, container: any): any;

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent implements OnInit {
  dailyData: DailyData[] = [];
  hourlyData: HourlyData[] = [];
  hourlyJson: any;
  leftVisible: boolean = true;
  selectedDay?: DailyData;
  tweetUrl?: string;
  center = {
    lat: this.weatherapiService.locationData.lat,
    lng: this.weatherapiService.locationData.lng
  };
  mapOptions = {
    center: this.center,
    zoom: 15
  };
  markerOptions = {
    position: this.center,
  }
  dailyChartData = [];
  hourlyChartData = [];

  starName: string = "star-fill";
  starClass: string = "color-checked";
  starState: boolean = false; // false: not saved, true: saved
  onClickSave() {
    this.starState = !this.starState;
    this.setStarDisplay();
    if (this.starState) {
      this.weatherapiService.addFavorite();
    } else {
      this.weatherapiService.removeFavorite();
    }
  }
  setStarDisplay() {
    if (this.starState) {
      this.starName = "star-fill";
      this.starClass = "color-checked";
    } else {
      this.starName = "star";
      this.starClass = "";
    }
  }


  onClickDay(day: DailyData) {
    console.log("selected day", day);
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

  displayDailyChart(): void {
    for (let i = 0; i < this.dailyData.length; i++) {
      this.dailyChartData.push([
        // @ts-ignore
        new Date(this.dailyData[i].startTime).getTime(),
        // @ts-ignore
        this.dailyData[i].temperatureMin,
        // @ts-ignore
        this.dailyData[i].temperatureMax,
      ]);
    }
    // console.log("daily chart data", this.dailyChartData);
    // @ts-ignore
    Highcharts.chart('daily-chart', {

      chart: {
        type: 'arearange',
        zoomType: 'x',
        height: 500,
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1
        }
      },

      title: {
        text: 'Temperature Ranges (Min, Max)'
      },

      xAxis: {
        type: 'datetime',
        labels: {
          format: '{value:%e %b}'
        }
      },

      yAxis: {
        title: {
          text: null
        }
      },

      tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: '°F',
        xDateFormat: '%A, %b %e'
      },

      legend: {
        enabled: false
      },

      series: [{
        name: 'Temperatures',
        data: this.dailyChartData,
        lineColor: '#ffa40d',
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#ffa40d'],
            // @ts-ignore
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        }
      }]

    });
  }

  displayHourlyChart(): void {
    // @ts-ignore
    let gram = new Meteogram(this.hourlyJson, "hourly-chart");
    // console.log(gram.getChartOptions());
    Highcharts.chart('hourly-chart', gram.getChartOptions(), chart => {
      gram.onChartLoad(chart);
    });
  }

  constructor(public weatherapiService: WeatherapiService) { }

  ngOnInit(): void {
    this.dailyData = this.weatherapiService.dailyData;
    // console.log("dailyData", this.dailyData);
    this.hourlyData = this.weatherapiService.hourlyData;
    this.hourlyJson = this.weatherapiService.hourlyJson;
    // console.log("hourlyData", this.hourlyData);
    this.center = {
      lat: this.weatherapiService.locationData.lat,
      lng: this.weatherapiService.locationData.lng
    };
    this.displayDailyChart();
    this.displayHourlyChart();

    this.weatherapiService.getFavourites();
    let id = this.weatherapiService.locationData.city + this.weatherapiService.locationData.state;
    this.starState = this.weatherapiService.isFavourite(id);
    this.setStarDisplay();
  }

}
