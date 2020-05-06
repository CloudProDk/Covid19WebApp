import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Country } from "../../models/country";

@Injectable({
  providedIn: "root",
})
export class TrackerService {
  private url = "https://corona-api.com/countries";

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country> {
    return this.http.get<Country>(this.url);
  }
  getCountry(code: String) {
    let countryUrl = `${this.url}/${code}`;
    return this.http.get<Country>(countryUrl);
  }
}
