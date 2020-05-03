import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule, MatCardModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    RouterModule.forChild([]),
    MatIconModule,

  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
