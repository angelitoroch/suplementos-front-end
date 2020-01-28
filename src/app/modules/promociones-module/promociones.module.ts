import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PromocionesRoutingModule } from "./promociones-routing.module";
import { PromocionesHomeComponent } from "./promociones-home/promociones-home.component";

@NgModule({
  declarations: [PromocionesHomeComponent],
  imports: [CommonModule, PromocionesRoutingModule]
})
export class PromocionesModule {}
