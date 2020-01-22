import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EncabezadoComponent } from './modules-app/encabezado/encabezado.component';
import { PieComponent } from './modules-app/pie/pie.component';
import { HomeComponent } from './modules-app/home/home.component';

@NgModule({
  declarations: [AppComponent, EncabezadoComponent, PieComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
