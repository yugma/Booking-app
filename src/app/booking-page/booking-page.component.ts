import { Component} from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent{
  bookedFlightDetailsFireObject: AngularFireObject<any>;
  bookedFlightDetails : any;

  constructor(db: AngularFireDatabase) {
    this.bookedFlightDetailsFireObject =  db.object('/bookedFlightDetails');

    this.bookedFlightDetailsFireObject.valueChanges().subscribe(result =>
      this.bookedFlightDetails = result
    );

  }

}
