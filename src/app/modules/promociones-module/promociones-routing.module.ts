import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/*Componentes*/
import { PromocionesHomeComponent } from "../promociones-module/promociones-home/promociones-home.component";

const routes: Routes = [
  { path: "promociones", component: PromocionesHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocionesRoutingModule {}
