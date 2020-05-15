import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public qoute: any;

  constructor(private toast: ToastrService, private spinner: NgxSpinnerService, private http: HttpClient) {}

  ngOnInit() {
    this.getQuote();
  }

  getQuote() {
    this.http.get('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote').subscribe(data => {
      this.qoute = data;
    });
  }


}
