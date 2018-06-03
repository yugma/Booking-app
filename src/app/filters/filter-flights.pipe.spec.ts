import { FilterFlightsPipe } from './filter-flights.pipe';
import * as Constants from '../constants/constants';
import { SearchCriteria } from '../interfaces/search-criteria';

describe('FilterOriginPipe', () => {
  it('test transform method of filter pipe', () => {
    const pipe = new FilterFlightsPipe();
    const args = {
      origin: 'DEL',
      destination: 'PNQ',
      date: '2018-06-10',
      priceRange:10000
    };
    const result: any[] = pipe.transform(Constants.availableFlights,args);
    expect(pipe).toBeTruthy();
    expect(result).toContain(Constants.availableFlights[1]);
  });
});
