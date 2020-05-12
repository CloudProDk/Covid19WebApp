import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * Menu items for the header nav bar.
   * Each object has a title and a link, the link is used for the navigation method
   */

  MENUITEMS = [
    {title: 'Home', link: 'tracker'},
    {title: 'Merchandise', link: 'shop'},
    {title: 'Take the test', link: 'quiz'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
