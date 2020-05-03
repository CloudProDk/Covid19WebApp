import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  /**
   * Directive input for the MenuItems
   */
  @Input() MENUITEMS: any[];
  /**
   * Directive input for the SideNav Header
   */
  @Input() HEADER: string;

  constructor() { }

  ngOnInit() {
  }

}
