import { Component, OnInit, Inject } from "@angular/core";
import { TrackerService } from "../../services/tracker/tracker.service";
import { Country } from "../../models/country";

@Component({
  selector: "app-tracker",
  templateUrl: "./tracker.component.html",
  styleUrls: ["./tracker.component.scss"],
})
export class TrackerComponent implements OnInit {
  countries: any = [];
  country: any = {};
  selectedDate: number;
  totalConfirmed: number = 0;
  totalActiveCases: number = 0;
  totalNewCases: number = 0;
  totalDeaths: number = 0;
  totalNewDeaths: number = 0;
  totalRecovered: number = 0;
  constructor(private trackerSvc: TrackerService) {}

  ngOnInit() {
    this.getCountries();
    this.getCountryDK();
    this.getTotalData();
  }

  getCountries() {
    this.trackerSvc.getCountries().subscribe((data) => {
      this.countries = data.data;
    });
  }

  getCountry(countryCode: String) {
    this.trackerSvc.getCountry(countryCode).subscribe((data) => {
      this.country = data.data;
      scroll(0, 0);
      this.selectedDate = undefined;
    });
  }
  getCountryDK() {
    this.trackerSvc.getCountry("DK").subscribe((data) => {
      this.country = data.data;
    });
  }
  getTotalData() {
    this.trackerSvc.getCountries().subscribe((data) => {
      for (let i = 0; i < data.data.length; i++) {
        this.totalConfirmed += data.data[i].latest_data.confirmed;
        this.totalActiveCases = this.totalConfirmed - this.totalRecovered;
        this.totalNewCases += data.data[i].today.confirmed;
        this.totalDeaths += data.data[i].latest_data.deaths;
        this.totalNewDeaths += data.data[i].today.deaths;
        this.totalRecovered += data.data[i].latest_data.recovered;
      }
    });
  }
}
