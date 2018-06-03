import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data-service.service';
import { FilterFlightsPipe } from '../filters/filter-flights.pipe';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        FilterFlightsPipe
      ],
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
