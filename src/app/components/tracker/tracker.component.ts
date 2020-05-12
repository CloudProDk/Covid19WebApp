import { Component, OnInit, Inject } from '@angular/core';
import { TrackerService } from '../../services/tracker/tracker.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit {
  countries: any = [];
  country: any = {};
  selectedDate: number = 0;

  constructor(private trackerSvc: TrackerService) {}

  ngOnInit(): void {
    this.getCountries();
    this.getCountryDK();
  }

  getCountries() {
    this.trackerSvc.getCountries().subscribe((data) => {
      this.countries = data.data;
    });
  }

  getCountry(countryCode: string) {
    this.trackerSvc.getCountry(countryCode).subscribe((data) => {
      this.country = data.data;
      scroll(0, 0);
      this.selectedDate = 0;
    });
  }
  getCountryDK() {
    this.trackerSvc.getCountry('DK').subscribe((data) => {
      this.country = data.data;
    });
  }
}
