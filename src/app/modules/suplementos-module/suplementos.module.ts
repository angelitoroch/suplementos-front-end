import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuplementosRoutingModule } from './suplementos-routing.module';
import { SuplementosHomeComponent } from './suplementos-home/suplementos-home.component';


@NgModule({
  declarations: [SuplementosHomeComponent],
  imports: [
    CommonModule,
    SuplementosRoutingModule
  ]
})
export class SuplementosModule { }
