import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data-service.service';
import {SearchCriteria} from '../interfaces/search-criteria';
import * as Constants from '../constants/constants';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  public passengerCounter: number[];
  public showReturnDate = false;

  public searchCriteria: SearchCriteria = {
    passengerCount: "",
    origin: null,
    destination: null,
    departure: null,
    return: null,
    priceRange: Constants.initialPriceRange
  };
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.passengerCounter = Constants.passengerCounter;
  }

  tabChange(element) {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');

    element.className += ' active';

    this.showReturnDate = element.id === 'return' ? true : false;

  }

  searchFlights(): any{
    this.dataService.change(this.searchCriteria);
  }

  changePriceRange(): any {
    this.dataService.change(this.searchCriteria);
  }

}
