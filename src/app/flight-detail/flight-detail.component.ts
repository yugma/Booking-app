import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {
  @Input ('details') details:any;
  constructor() { }

  ngOnInit() {
  }

  public getTimeFromDateTime(date: Date): string{
    if (!date) {
      return null;
    }
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }
}
