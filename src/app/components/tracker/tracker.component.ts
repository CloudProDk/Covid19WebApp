import { Component, OnInit, Inject } from "@angular/core";
import { TrackerService } from "../../services/tracker/tracker.service";
import { Country } from "../../models/country";
import { NumberFormatPipe } from "../../shared/number-format.pipe";
import { DecimalPipe } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: "app-tracker",
  templateUrl: "./tracker.component.html",
  styleUrls: ["./tracker.component.scss"],
  providers: [ NumberFormatPipe, DecimalPipe ]
})
export class TrackerComponent implements OnInit {
  countries: any = [];
  country: any = {};
  displayedColumns: string[] = ['country', 'totalCases', 'activeCases', 'newCases', 'totalDeaths', 'newDeaths', 'totalRecovered'];
  todayDate: Date;
  minDate: Date;
  maxDate: Date;
  dateToIndexDictionary: any = {};
  selectedDate: Date;
  selectedDateIndex: number = 0;
  // days: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // months: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(private trackerSvc: TrackerService, private numberFormat: NumberFormatPipe, private decimalFormat: DecimalPipe) {
    const today = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
    this.todayDate = today;
    this.minDate = today;
    this.maxDate = today;
    this.selectedDate = today;
    this.dateToIndexDictionary[today.toDateString()] = 0;
  }

  ngOnInit(): void {
    this.getCountries();
    this.getCountryDK();
  }

  getCountries() {
    this.trackerSvc.getCountries().subscribe((data) => {
      this.countries = data.data;
    });
  }

  getCountry(countryCode: String) {
    this.trackerSvc.getCountry(countryCode).subscribe((data) => {
      console.log(data.data);
      this.country = data.data;
      scroll(0, 0);
      this.selectedDateIndex = 0;

      if(this.country.timeline && Array.isArray(this.country.timeline)) {
        this.minDate = new Date(this.country.timeline.slice(-1)[0].date);
        this.dateToIndexDictionary = {}; // Reset

        for (let i = 0; i < this.country.timeline.length; i++) {
          const timelineDate = this.country.timeline[i].date;
          this.dateToIndexDictionary[timelineDate] = i;
        }
      } else {
        this.minDate = new Date();
      }
    });
  }

  getCountryDK() {
    this.getCountry('DK');
    // this.trackerSvc.getCountry("DK").subscribe((data) => {
    //   this.country = data.data;
    // });
  }

  updateDate(event: MatDatepickerInputEvent<Date>) {
    const updateDate = new Date(Date.UTC(event.value.getFullYear(), event.value.getMonth(), event.value.getDate()));
    this.selectedDate = updateDate;
    this.selectedDateIndex = this.dateToIndexDictionary[updateDate.toJSON().slice(0,10)];
  }

  getEmojiUnicode(country: string) {
    if(!country)
      return country;

    if(country === 'EARTH')
      return '1f30e';
    
    return twemoji.convert.toCodePoint(country.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397)));
  }

  formatNumber(number: Number, decimals: Number = 1) {
    return number >= 10000 ? this.numberFormat.transform(number, decimals) : this.decimalFormat.transform(number, '1.');
  }
}
