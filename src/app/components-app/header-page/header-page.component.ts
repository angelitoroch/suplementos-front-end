import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-header-page",
  templateUrl: "./header-page.component.html",
  styleUrls: ["./header-page.component.css"]
})
export class HeaderPageComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-sm" });
  }

  confirm(): void {
    this.message = "Confirmed!";
    this.modalRef.hide();
  }

  decline(): void {
    this.message = "Declined!";
    this.modalRef.hide();
  }
}
