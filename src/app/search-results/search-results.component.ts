import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { FlightResults } from '../interfaces/flight-results';
import { SearchCriteria } from '../interfaces/search-criteria';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public flightResults: FlightResults;
  public searchCriteria: SearchCriteria;
  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.dataService.currentResults.subscribe(
      flightResults => {
        return this.flightResults = flightResults;
      });
    this.dataService.currentCriteria.subscribe(
      searchCriteria => {
        return this.searchCriteria = searchCriteria;
      });
  }

  getTotalPrice(flightPrice, returnFlightPrice) {
    return returnFlightPrice === undefined ? (flightPrice * +this.searchCriteria.passengerCount) :
    ((flightPrice + returnFlightPrice) * +this.searchCriteria.passengerCount);
  }

}
