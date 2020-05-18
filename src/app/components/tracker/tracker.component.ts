import { Component, OnInit, Inject } from "@angular/core";
import { TrackerService } from "../../services/tracker/tracker.service";
import { Country } from "../../models/country";
import { NumberFormatPipe } from "../../shared/number-format.pipe";
import { DecimalPipe } from "@angular/common";
import { MatDatepickerInputEvent } from "@angular/material";

@Component({
  selector: "app-tracker",
  templateUrl: "./tracker.component.html",
  styleUrls: ["./tracker.component.scss"],
  providers: [NumberFormatPipe, DecimalPipe],
})
export class TrackerComponent implements OnInit {
  countries: any = [];
  savedCountries: any = [];
  country: any = {};
  displayedColumns: string[] = [
    "country",
    "totalCases",
    "activeCases",
    "newCases",
    "totalDeaths",
    "newDeaths",
    "totalRecovered",
  ];
  todayDate: Date;
  minDate: Date;
  maxDate: Date;
  dateToIndexDictionary: any = {};
  selectedDate: Date;
  selectedDateIndex: number = 0;
  totalConfirmed: number = 0;
  totalActiveCases: number = 0;
  totalNewCases: number = 0;
  totalDeaths: number = 0;
  totalNewDeaths: number = 0;
  totalRecovered: number = 0;
  totalPopulation: number = 0;
  totalCritical: number = 0;
  totalCasesPerMillionPopulation: number = 0;

  constructor(
    private trackerSvc: TrackerService,
    private numberFormat: NumberFormatPipe,
    private decimalFormat: DecimalPipe
  ) {
    const today = new Date(
      Date.UTC(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      )
    );
    this.todayDate = today;
    this.minDate = today;
    this.maxDate = today;
    this.selectedDate = today;
    this.dateToIndexDictionary[today.toDateString()] = 0;
  }

  ngOnInit() {
    this.getCountries();
    this.getCountryDK();
    this.getTotalData();
  }

  getCountries() {
    this.trackerSvc.getCountries().subscribe((data) => {
      this.countries = data.data;
      this.savedCountries = data.data;
    });
  }

  sort(searchResult: string) {
    console.log(searchResult);
    this.countries = this.savedCountries.filter((country) =>
      country.name.toLowerCase().includes(searchResult.toLowerCase())
    );
  }

  getCountry(countryCode: string) {
    this.trackerSvc.getCountry(countryCode).subscribe((data) => {
      console.log(data.data);
      this.country = data.data;
      scroll(0, 0);
      this.selectedDateIndex = 0;

      if (this.country.timeline && Array.isArray(this.country.timeline)) {
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
    this.getCountry("DK");
    // this.trackerSvc.getCountry("DK").subscribe((data) => {
    //   this.country = data.data;
    // });
  }
  getGlobalCountry() {
    this.country.timeline = undefined;
    this.country.name = "Global";
    this.country.code = "EARTH";
    this.country.latest_data.confirmed = this.totalConfirmed;
    this.country.latest_data.recovered = this.totalRecovered;
    this.country.population = this.totalPopulation;
    this.country.latest_data.deaths = this.totalDeaths;
    this.country.latest_data.critical = this.totalCritical;
    this.country.today.deaths = this.totalNewDeaths;
    this.country.today.confirmed = this.totalNewCases;
    this.country.latest_data.calculated.cases_per_million_population = this.totalCasesPerMillionPopulation;

    scroll(0, 0);
    this.selectedDateIndex = 0;

    if (this.country.timeline && Array.isArray(this.country.timeline)) {
      this.minDate = new Date(this.country.timeline.slice(-1)[0].date);
      this.dateToIndexDictionary = {}; // Reset

      for (let i = 0; i < this.country.timeline.length; i++) {
        const timelineDate = this.country.timeline[i].date;
        this.dateToIndexDictionary[timelineDate] = i;
      }
    } else {
      this.minDate = new Date();
    }
  }

  updateDate(event: MatDatepickerInputEvent<Date>) {
    const updateDate = new Date(
      Date.UTC(
        event.value.getFullYear(),
        event.value.getMonth(),
        event.value.getDate()
      )
    );
    this.selectedDate = updateDate;
    this.selectedDateIndex = this.dateToIndexDictionary[
      updateDate.toJSON().slice(0, 10)
    ];
  }

  getEmojiUnicode(country: string) {
    if (!country) return country;

    if (country === "EARTH") return "1f30e";

    return twemoji.convert.toCodePoint(
      country
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    );
  }

  formatNumber(number: Number, decimals: Number = 1) {
    return number >= 10000
      ? this.numberFormat.transform(number, decimals)
      : this.decimalFormat.transform(number, "1.");
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
        this.totalPopulation += data.data[i].population;
        this.totalCritical += data.data[i].latest_data.critical;
        this.totalCasesPerMillionPopulation +=
          data.data[i].latest_data.calculated.cases_per_million_population;
      }
    });
  }
}
