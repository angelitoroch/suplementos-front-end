import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"]
})
export class RegisterUserComponent implements OnInit {
  bandera: boolean;

  constructor() {
    this.bandera=true;
  }

  ngOnInit() {}

  cambiar(){
    this.bandera=false;
  }
}
