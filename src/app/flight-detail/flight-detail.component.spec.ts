import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailComponent } from './flight-detail.component';

describe('FlightDetailComponent', () => {
  let component: FlightDetailComponent;
  let fixture: ComponentFixture<FlightDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test getTimeFromDateTime function', () => {
    let dateTime = new Date('June 10, 2018 20:15:00');
    let output = component.getTimeFromDateTime(dateTime);

    expect(output).toBe('8:15 PM');
  });

});
