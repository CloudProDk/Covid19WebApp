import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule, MatCardModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { DragListComponent } from './drag-list/drag-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [SidebarComponent, DragListComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    RouterModule.forChild([]),
    MatIconModule,
    DragDropModule

  ],
  exports: [
    SidebarComponent,
    DragListComponent
  ]
})
export class SharedModule { }
