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
      if (flight.origin.toLowerCase() === args.origin.toLowerCase()
      && flight.destination.toLowerCase() === args.destination.toLowerCase()
      && flight.depart.getDate() === date.getDate()
      && flight.depart.getMonth() === date.getMonth()
      && flight.depart.getFullYear() === date.getFullYear()
      && flight.price <= args.priceRange
      ) {
        return flight;
      }
    });
  }

}
