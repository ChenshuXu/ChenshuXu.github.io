import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component'; // <-- NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherapiService } from "./weatherapi.service";
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from "@angular/google-maps";

import {
  NgxBootstrapIconsModule,
  search,
  listNested,
  chevronRight,
  chevronLeft,
  twitter,
  star,
  starFill,
  heart,
  heartFill,
  trashFill,
} from "ngx-bootstrap-icons";
import { FavoritesComponent } from './favorites/favorites.component';
import { ResultsComponent } from './results/results.component';
import { SlidePanelComponent } from './slide-panel/slide-panel.component';
import { DisplayResultsComponent } from './display-results/display-results.component';

const icons = {
  search,
  listNested,
  chevronRight,
  chevronLeft,
  twitter,
  star,
  starFill,
  heart,
  heartFill,
  trashFill,
};

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FavoritesComponent,
    ResultsComponent,
    SlidePanelComponent,
    DisplayResultsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons),
    NgbPaginationModule,
    NgbAlertModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
