import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchCriteria } from '../interfaces/search-criteria';
import { FlightResults } from '../interfaces/flight-results';
import { FilterFlightsPipe } from '../filters/filter-flights.pipe';
import * as Constants from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private flightResults: any = new BehaviorSubject({});
  private searchCriteria: any = new BehaviorSubject({});
  currentResults = this.flightResults.asObservable();
  currentCriteria = this.searchCriteria.asObservable();

  constructor(private flightFilter: FilterFlightsPipe) { }

  change(changedCriteria: SearchCriteria) {
    const flightResults = this.searchFlights(changedCriteria);
    this.flightResults.next(flightResults);
    this.searchCriteria.next(changedCriteria);
  }

  searchFlights(criteria: SearchCriteria): FlightResults {
    let returnFlights = [];
    let originFlights =  this.filterFlights({
      origin: criteria.origin,
      destination: criteria.destination,
      date: criteria.departure,
      priceRange: criteria.priceRange
    });
    if (criteria.return) {
      returnFlights = this.filterFlights({
        origin: criteria.destination,
        destination: criteria.origin,
        date: criteria.return,
        priceRange: criteria.priceRange
      });
      returnFlights = (returnFlights.length === 0) ? [{}] : returnFlights;
      return {
        departureFlight: originFlights,
        returnFlight: returnFlights
      };
    }
    return {
      departureFlight: originFlights,
      returnFlight: [{}]
    };
  }

  filterFlights(args: any): any[] {
    return this.flightFilter.transform(Constants.availableFlights, args);
  }

}
