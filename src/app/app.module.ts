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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderPageComponent,
    FooterPageComponent
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
