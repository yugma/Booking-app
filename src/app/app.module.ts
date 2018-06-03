import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { SearchCriteria } from './interfaces/search-criteria';
import { FlightResults } from './interfaces/flight-results';
import { FilterFlightsPipe } from './filters/filter-flights.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchResultsComponent,
    FlightDetailComponent,
    FilterFlightsPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FilterFlightsPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
