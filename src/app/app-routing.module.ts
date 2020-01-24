import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components-app/home/home.component";
import { NotFoundComponent } from "./components-app/not-found/not-found.component";
import { RopaComponent } from "./components-app/ropa/ropa.component";
import { SuplementosComponent } from "./components-app/suplementos/suplementos.component";
import { PromocionesComponent } from "./components-app/promociones/promociones.component";
import { RemateComponent } from "./components-app/remate/remate.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "ropa", component: RopaComponent },
  { path: "promociones", component: PromocionesComponent },
  { path: "remate", component: RemateComponent },
  { path: "suplementos", component: SuplementosComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
