import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ErrorService } from 'src/app/shared/error/error.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.html'
})
export class AlertModal {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService, private error: ErrorService) {}

  onClose() {
   this.error.onClose()
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
