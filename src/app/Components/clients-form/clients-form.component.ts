import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ElementRef,
  Input,
  Output,
} from '@angular/core';
import { Form } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css'],
})
export class ClientsFormComponent {
  @ViewChild('template', { static: false })
  template!: TemplateRef<HTMLDivElement>;



  modalRef?: BsModalRef;
  config = {
    animated: true,
  };

  constructor(private modalService: BsModalService) {}

  onClose() {
    this.modalRef?.hide();
  }

  openModal() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  onSubmit(f: Form) {
    console.log(f)
  }


}
