import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { FormsModule } from '@angular/forms';
import { FilterFlightsPipe } from '../filters/filter-flights.pipe';
import * as Constants from '../constants/constants';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchFormComponent,
        FilterFlightsPipe
       ],
      providers:[FilterFlightsPipe],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.passengerCounter).not.toBeNull();
  });

  it('should test searchFlights', () => {
    component.searchCriteria = Constants.sampleSearchCriteria;
    spyOn(component.dataService,'change');
    component.searchFlights();
    expect(component.dataService.change).toHaveBeenCalledWith(component.searchCriteria);
  });
});
