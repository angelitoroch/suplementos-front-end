import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemateRoutingModule } from './remate-routing.module';
import { RemateHomeComponent } from './remate-home/remate-home.component';


@NgModule({
  declarations: [RemateHomeComponent],
  imports: [
    CommonModule,
    RemateRoutingModule
  ]
})
export class RemateModule { }
