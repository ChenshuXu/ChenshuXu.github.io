import { Component, OnInit } from '@angular/core';
import {WeatherapiService} from "../weatherapi.service";
import {LocationData} from "../app.models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteList: LocationData[] = [];

  onClickItem(location: LocationData) {
    console.log("click", location);
    this.weatherapiService.locationData = location;
    this.weatherapiService.getWeatherDataFromLocation(location.lat, location.lng);
    this.router.navigate(["/home"]);
  }

  onDeleteItem(location: LocationData) {
    this.weatherapiService.removeFavoriteLocation(location);
    this.updateFavoriteList();
  }

  updateFavoriteList() {
    this.favoriteList = [];
    this.weatherapiService.favorites.forEach((value: LocationData, key: string) => {
      this.favoriteList.push(value);
    });
  }

  constructor(public weatherapiService: WeatherapiService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.weatherapiService.locationData);
    this.weatherapiService.getFavourites();

    this.updateFavoriteList();
  }

}
