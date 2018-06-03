import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'filterFlights',
  pure: false
})
export class FilterFlightsPipe implements PipeTransform {
  private datPipe: DatePipe;
  transform(flights: any[], args?: any): any {
    if (!flights || !args) {
      return flights;
    }
    const date = new Date(args.date);
    return flights.filter(flight => {
      if (flight.origin === args.origin
      && flight.destination === args.destination
      && flight.depart.getDate() === date.getDate()
      && flight.price <= args.priceRange
      ) {
        return flight;
      }
    });
  }

}
