import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/*Componentes*/
import { SuplementosHomeComponent } from "../suplementos-module/suplementos-home/suplementos-home.component";

const routes: Routes = [
  { path: "suplementos", component: SuplementosHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuplementosRoutingModule {}
