import {Component, OnInit} from '@angular/core';
import { WeatherapiService } from "../weatherapi.service";
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(public weatherapiService: WeatherapiService) { }

  ngOnInit(): void {

  }

}
