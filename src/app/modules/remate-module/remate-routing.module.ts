import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/*Componentes*/
import { RemateHomeComponent } from "../remate-module/remate-home/remate-home.component";

const routes: Routes = [{ path: "remate", component: RemateHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemateRoutingModule {}
