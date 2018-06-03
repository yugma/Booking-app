import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FlightDetailComponent } from '../flight-detail/flight-detail.component';
import { FilterFlightsPipe } from '../filters/filter-flights.pipe';
import * as Constants from '../constants/constants';
import { Observable } from 'rxjs';
import { FlightResults } from '../interfaces/flight-results';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchResultsComponent,
        FlightDetailComponent
       ],
       providers:[
          FilterFlightsPipe
       ],
       imports:[
         BrowserModule,
         FormsModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should test subscribed events', () => {
      let expectedFlightResults: FlightResults= {
        departureFlight: [Constants.availableFlights[1]],
        returnFlight: [{}]
      };
      component.dataService.change(Constants.sampleSearchCriteria);
      expect(component.flightResults).toEqual(expectedFlightResults);
  });
});
