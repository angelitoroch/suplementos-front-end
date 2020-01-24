import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

/*ngx bootstrap*/
import { ModalModule } from "ngx-bootstrap/modal";

/*FontAwesome*/
import { AngularFontAwesomeModule } from "angular-font-awesome";

/*Componentes*/
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderPageComponent } from "./components-app/header-page/header-page.component";
import { HomeComponent } from "./components-app/home/home.component";
import { NotFoundComponent } from "./components-app/not-found/not-found.component";
import { FooterPageComponent } from "./components-app/footer-page/footer-page.component";
import { LoginComponent } from './components-app/login/login.component';
import { RopaComponent } from './components-app/ropa/ropa.component';
import { SuplementosComponent } from './components-app/suplementos/suplementos.component';
import { PromocionesComponent } from './components-app/promociones/promociones.component';
import { RemateComponent } from './components-app/remate/remate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderPageComponent,
    FooterPageComponent,
    LoginComponent,
    RopaComponent,
    SuplementosComponent,
    PromocionesComponent,
    RemateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
