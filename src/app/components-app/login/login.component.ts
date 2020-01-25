import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  bandera: boolean;

  constructor() {
    this.bandera = true;
  }

  ngOnInit() {}

  cambiar() {
    console.log(this.bandera);
    this.bandera = false;
    console.log(this.bandera);
  }
}
