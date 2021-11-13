import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from "@angular/common/http";
import { throwError, BehaviorSubject, of } from "rxjs";
import { catchError, retry, tap } from "rxjs/operators";
import {DailyData, FavState, HourlyData, LocationData} from "./app.models";

const ipinfo_url = "https://ipinfo.io/?token=5f8b30af9607e3";
const backend_url = "https://csci571-chenshu-nodejs.azurewebsites.net";
const googleapis_url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const googleapis_key = "&key=AIzaSyBmRnM9YBpvHa1SkTZYSZ55p5mB5v1_rFc";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  private useSampleData = true;
  public dailyData: DailyData[] = [];
  public hourlyData: HourlyData[] = [];
  public hourlyJson: any;
  public locationData: LocationData = { address: "", lng: 0, lat: 0, city: "", state: ""};
  public favorites: Map<string, LocationData> = new Map();

  public state = {
    isLoading: false,
    error: false,
    done: false
  };

  constructor(private http: HttpClient) { }

  setDailyData(data: []) {
    this.dailyData = [];
    for (let i = 0; i < data.length; i++) {
      let current = data[i];
      // @ts-ignore
      let [weatherText, weatherImageSrc] = this.ConvertWeatherCode(current.values.weatherCode);
      this.dailyData.push({
        // @ts-ignore
        date: this.GetDateText(current.startTime),
        statusImage: weatherImageSrc,
        statusString: weatherText,

        // @ts-ignore
        startTime: current.startTime,
        // @ts-ignore
        temperature: current.values.temperature,
        // @ts-ignore
        temperatureApparent: current.values.temperatureApparent,
        // @ts-ignore
        temperatureMin: current.values.temperatureMin,
        // @ts-ignore
        temperatureMax: current.values.temperatureMax,
        // @ts-ignore
        windSpeed: current.values.windSpeed,
        // @ts-ignore
        windDirection: current.values.windDirection,
        // @ts-ignore
        humidity: current.values.humidity,
        // @ts-ignore
        pressureSeaLevel: current.values.pressureSeaLevel,
        // @ts-ignore
        uvIndex: current.values.uvIndex,
        // @ts-ignore
        weatherCode: current.values.weatherCode,
        // @ts-ignore
        precipitationProbability: current.values.precipitationProbability,
        // @ts-ignore
        precipitationType: current.values.precipitationType,
        // @ts-ignore
        sunriseTime: current.values.sunriseTime,
        // @ts-ignore
        sunsetTime: current.values.sunsetTime,
        // @ts-ignore
        visibility: current.values.visibility,
        // @ts-ignore
        moonPhase: current.values.moonPhase,
        // @ts-ignore
        cloudCover: current.values.cloudCover
      });
    }
  }

  setHourlyData(data: []) {
    this.hourlyData = [];
    for (let i = 0; i < data.length; i++) {
      let current = data[i];
      this.hourlyData.push({
        // @ts-ignore
        startTime: current.startTime,
        // @ts-ignore
        temperature: current.values.temperature,
        // @ts-ignore
        temperatureApparent: current.values.temperatureApparent,
        // @ts-ignore
        temperatureMin: current.values.temperatureMin,
        // @ts-ignore
        temperatureMax: current.values.temperatureMax,
        // @ts-ignore
        windSpeed: current.values.windSpeed,
        // @ts-ignore
        windDirection: current.values.windDirection,
        // @ts-ignore
        humidity: current.values.humidity,
        // @ts-ignore
        pressureSeaLevel: current.values.pressureSeaLevel,
        // @ts-ignore
        uvIndex: current.values.uvIndex,
        // @ts-ignore
        weatherCode: current.values.weatherCode,
        // @ts-ignore
        precipitationProbability: current.values.precipitationProbability,
        // @ts-ignore
        precipitationType: current.values.precipitationType,
        // @ts-ignore
        visibility: current.values.visibility,
        // @ts-ignore
        cloudCover: current.values.cloudCover,
      });
    }
  }

  reset() {
    this.state = {
      isLoading: false,
      error: false,
      done: false
    }
    this.dailyData = [];
    this.hourlyData = [];
  }

  handleError(error: HttpErrorResponse) {
    this.state.error = true;
    this.state.isLoading = false;

    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }

  getCurrentLocation() {
    return this.http
      .get(ipinfo_url)
      .pipe(retry(1), catchError(this.handleError));
  }

  // called from other component
  getWeatherDataFromAddress(address: string) {
    this.state.isLoading = true;
    this.state.done = false;
    this.http
      .get(googleapis_url + address + googleapis_key)
      .pipe(retry(1), catchError(this.handleError))
      .subscribe(locationData => {
        // @ts-ignore
        let lat = parseFloat(locationData.results[0].geometry.location.lat);
        // @ts-ignore
        let lng = parseFloat(locationData.results[0].geometry.location.lng);
        // @ts-ignore
        let address = locationData.results[0].formatted_address;
        this.getWeatherDataFromLocation(lat, lng);
        this.locationData.lat = lat;
        this.locationData.lng = lng;
        this.locationData.address = address;
      })
  }

  // called from other component
  // get all weather data from backend
  getWeatherDataFromLocation(lat: number, lng: number) {
    this.state.isLoading = true;
    this.state.done = false;
    if (this.useSampleData) {
      this.getDailyExampleData();
      this.getHourlyExampleData();
    } else {
      // get daily data
      this.http
        .get(backend_url + "/timelines", {params: {lat: lat, lng: lng}})
        .pipe(retry(1), catchError(this.handleError))
        .subscribe(data => {
          // console.log("get real daily data data", data);
          // @ts-ignore
          if (!data.data.timelines) {
            this.state.error = true;
          } else {
            // @ts-ignore
            this.setDailyData(data.data.timelines[0].intervals);
          }
          this.state.isLoading = false;
          this.state.done = true;
          console.log("daily data", this.dailyData);
        });
      // get hourly data
      this.http
        .get(backend_url + "/hourly", {params: {lat: lat, lng: lng}})
        .pipe(retry(1), catchError(this.handleError))
        .subscribe(data => {
          // console.log("get real hourly data", data);
          // @ts-ignore
          if (!data.data.timelines) {
            this.state.error = true;
          } else {
            // @ts-ignore
            this.setHourlyData(data.data.timelines[0].intervals);
            this.hourlyJson = data;
          }
          this.state.isLoading = false;
          this.state.done = true;
          console.log("hourly data", this.hourlyData);
        });
    }
  }

  getDailyExampleData() {
    return this.http
      .get(backend_url + "/timelines/example")
      .pipe(retry(1), catchError(this.handleError))
      .subscribe(data => {
        // console.log("use daily example data", data);
        // @ts-ignore
        if (!data.data.timelines) {
          this.state.error = true;
        } else {
          // @ts-ignore
          this.setDailyData(data.data.timelines[0].intervals);
        }
        this.state.isLoading = false;
        this.state.done = true;
        console.log("daily data", this.dailyData);
      });
  }

  getHourlyExampleData() {
    return this.http
      .get(backend_url + "/hourly/example")
      .pipe(retry(1), catchError(this.handleError))
      .subscribe(data => {
        // console.log("use hourly example data", data);
        // @ts-ignore
        if (!data.data.timelines) {
          this.state.error = true;
        } else {
          // @ts-ignore
          this.setHourlyData(data.data.timelines[0].intervals);
          this.hourlyJson = data;
        }
        this.state.isLoading = false;
        this.state.done = true;
        console.log("hourly data", this.hourlyData);
      });
  }

  removeFavorite() {
    console.log("remove", this.locationData);
    let key = this.locationData.city + this.locationData.state;
    this.favorites.delete(key);
    this.saveToLocalStorage();
  }

  removeFavoriteLocation(location: LocationData) {
    console.log("remove", location);
    let key = location.city + location.state;
    this.favorites.delete(key);
    this.saveToLocalStorage();
  }

  addFavorite() {
    console.log("add", this.locationData);
    let key = this.locationData.city + this.locationData.state;
    this.favorites.set(key, this.locationData);
    this.saveToLocalStorage()
  }

  saveToLocalStorage() {
    console.log("save ", this.favorites);
    localStorage.setItem("saved", JSON.stringify({data: Array.from(this.favorites.entries())}));
  }

  isFavourite(id: string): boolean {
    return this.favorites.has(id);
  }

  getFavourites() {
    this.favorites.clear();
    let jsonStr = localStorage.getItem("saved");
    if (jsonStr != null) {
      let jsonData = JSON.parse(jsonStr);
      for (let i = 0; i < jsonData.data.length; i++) {
        let key = jsonData.data[i][0];
        let value: LocationData = jsonData.data[i][1];
        this.favorites.set(key, value);
      }
      console.log("Got favs" , this.favorites);
    }
  }

  ConvertWeatherCode(weatherCode: number) {
    let weatherText = "Unknown";
    let weatherImgSrc = "clear_day.svg";
    switch (weatherCode) {
      case 1000:
        weatherText = "Clear";
        weatherImgSrc = "clear_day.svg";
        break;
      case 1100:
        weatherText = "Mostly Clear";
        weatherImgSrc = "mostly_clear_day.svg";
        break;
      case 1101:
        weatherText = "Partly Cloudy";
        weatherImgSrc = "partly_cloudy_day.svg";
        break;
      case 1102:
        weatherText = "Mostly Cloudy";
        weatherImgSrc = "mostly_cloudy.svg";
        break;
      case 1001:
        weatherText = "Cloudy";
        weatherImgSrc = "cloudy.svg";
        break;
      case 2000:
        weatherText = "Fog";
        weatherImgSrc = "fog.svg";
        break;
      case 2100:
        weatherText = "Light Fog";
        weatherImgSrc = "fog_light.svg";
        break;
      case 8000:
        weatherText = "Thunderstorm";
        weatherImgSrc = "tstorm.svg";
        break;
      case 5001:
        weatherText = "Flurries";
        weatherImgSrc = "flurries.svg";
        break;
      case 5100:
        weatherText = "Light Snow";
        weatherImgSrc = "snow_light.svg";
        break;
      case 5000:
        weatherText = "Snow";
        weatherImgSrc = "snow.svg";
        break;
      case 5101:
        weatherText = "Heavy Snow";
        weatherImgSrc = "snow_heavy.svg";
        break;
      case 7102:
        weatherText = "Light Ice Pellets";
        weatherImgSrc = "ice_pellets_light.svg";
        break;
      case 7101:
        weatherText = "Heavy Ice Pellets";
        weatherImgSrc = "ice_pellets_heavy.svg";
        break;
      case 4000:
        weatherText = "Drizzle";
        weatherImgSrc = "drizzle.svg";
        break;
      case 6000:
        weatherText = "Freezing Drizzle";
        weatherImgSrc = "freezing_drizzle.svg";
        break;
      case 6200:
        weatherText = "Light Freezing Rain";
        weatherImgSrc = "freezing_rain_light.svg";
        break;
      case 6001:
        weatherText = "Freezing Rain";
        weatherImgSrc = "freezing_rain.svg";
        break;
      case 6201:
        weatherText = "Heavy Freezing Rain";
        weatherImgSrc = "freezing_rain_heavy.svg";
        break;
      case 4200:
        weatherText = "Light Rain";
        weatherImgSrc = "rain_light.svg";
        break;
      case 4001:
        weatherText = "Rain";
        weatherImgSrc = "rain.svg";
        break;
      case 4201:
        weatherText = "Heavy Rain";
        weatherImgSrc = "rain_heavy.svg";
        break;
    }
    let folder = "../assets/WeatherSymbols/"
    return [weatherText, folder + weatherImgSrc];
  }

  GetDateText(dateString: string) {
    let datetime = new Date(dateString);
    return `${days[datetime.getDay()]}, ${datetime.getDate()} ${months[datetime.getMonth()]} ${datetime.getFullYear()}`;
  }
}
