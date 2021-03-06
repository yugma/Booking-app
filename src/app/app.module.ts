import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { SearchCriteria } from './interfaces/search-criteria';
import { FlightResults } from './interfaces/flight-results';
import { FilterFlightsPipe } from './filters/filter-flights.pipe';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {path: 'booking-page', component: BookingPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchResultsComponent,
    FlightDetailComponent,
    FilterFlightsPipe,
    BookingPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [
    FilterFlightsPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
