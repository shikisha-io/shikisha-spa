import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { TimeagoModule } from "ngx-timeago";

import { ShikishaCardComponent } from './card/card.component';
import { ShikishaCardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [ShikishaCardComponent, ShikishaCardListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    TimeagoModule
  ],
  exports: [
    ShikishaCardComponent,
    ShikishaCardListComponent
  ]
})
export class ShikishaCardModule { }
