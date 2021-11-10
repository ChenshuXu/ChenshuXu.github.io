import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from "@angular/forms";
import { WeatherapiService } from "../weatherapi.service";
import { AllStates } from "../app.models";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  allStates = AllStates;
  stateControl = {
    disableInputs: false
  };
  searchForm = {
    street: undefined,
    city: undefined,
    state: "select",
    autoDetect: false,
    fullAddress: undefined
  };

  constructor(private weatherapiService: WeatherapiService) { }

  clear(form: NgForm): void {
    form.resetForm();
    this.searchForm = {
      street: undefined,
      city: undefined,
      state: "select",
      autoDetect: false,
      fullAddress: undefined
    };
    this.stateControl = {
      disableInputs: false
    };
    this.weatherapiService.reset();
  }

  onAutoDetectClick(): void {
    this.stateControl.disableInputs = !this.stateControl.disableInputs;
  }

  onSubmit() {
    this.weatherapiService.state.isLoading = true;
    console.log("search form", this.searchForm);
    if (this.searchForm.state == "select") {
      this.searchForm.state = "California";
    }

    if (this.searchForm.autoDetect) {
      this.weatherapiService.getCurrentLocation().subscribe((data: {}) => {
        console.log(data);
        // @ts-ignore
        var latlong = data.loc.split(",").map(Number);
        let lat = parseFloat(latlong[0]);
        let lng = parseFloat(latlong[1]);
        // @ts-ignore
        let address = data.city + " " + data.region;
        this.weatherapiService.locationData = {
          lat: lat,
          lng: lng,
          address: address
        };
        this.weatherapiService.getWeatherDataFromLocation(lat, lng);
      });
    } else {
      let address = this.searchForm.street + " " + this.searchForm.city + " " + this.searchForm.state;
      this.weatherapiService.getWeatherDataFromAddress(address);
    }
  }
  ngOnInit(): void {

  }
}
