import { Component, TemplateRef, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'error',
  templateUrl: './error.component.html'

})
export class ErrorComponent implements AfterViewInit {

  @ViewChild('template') template!: TemplateRef<any>;
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalRef = this.modalService._showModal(template);
  }

  ngAfterViewInit(): void {
    this.openModal(this.template)
  }

  log(){
    console.log("chamando");
  }
}
