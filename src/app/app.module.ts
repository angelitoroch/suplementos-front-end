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
import { LoginComponent } from "./components-app/login/login.component";
import { RegisterUserComponent } from "./components-app/register-user/register-user.component";

/*Modulos*/
import { RemateModule } from "./modules/remate-module/remate.module";
import { SuplementosModule } from "./modules/suplementos-module/suplementos.module";
import { PromocionesModule } from "./modules/promociones-module/promociones.module";
import { RopaModule } from "./modules/ropa-module/ropa.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderPageComponent,
    FooterPageComponent,
    LoginComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    RemateModule,
    SuplementosModule,
    PromocionesModule,
    RopaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
