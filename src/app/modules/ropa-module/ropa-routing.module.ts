import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/*Componentes*/
import { RopaHomeComponent } from "../ropa-module/ropa-home/ropa-home.component";

const routes: Routes = [{ path: "ropa", component: RopaHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RopaRoutingModule {}
