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
  public quote: string;
  private quotes: Array<string> = [
    "Wash your hands while you wait",
    "Stay inside!",
    "Be mindful of others!",
    "Don't panic...",
    "Don't hoard...",
    "Keep a safe distance",
    "Cough in your sleeve!",
    "Sneeze in your sleeve!",
    "Avoid handshakes!"
  ]

  constructor(private toast: ToastrService, private spinner: NgxSpinnerService, private http: HttpClient) {}

  ngOnInit() {
    this.getQuote();
  }

  getQuote() {
    this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }


}
