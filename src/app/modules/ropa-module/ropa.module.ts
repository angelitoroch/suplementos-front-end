import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RopaRoutingModule } from './ropa-routing.module';
import { RopaHomeComponent } from './ropa-home/ropa-home.component';


@NgModule({
  declarations: [RopaHomeComponent],
  imports: [
    CommonModule,
    RopaRoutingModule
  ]
})
export class RopaModule { }
