import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ClientsService } from './../http-client/clients.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css'],
})
export class ClientsFormComponent implements OnInit{
  @ViewChild('template', { static: false }) template!: TemplateRef<HTMLDivElement>;

  submitted = false;
  form!: FormGroup;
  modalRef?: BsModalRef;


  config = {
    animated: true,
  };

  constructor(
    private modalService: BsModalService,
    private _fb: FormBuilder,
    private _clientService: ClientsService,
    private _route: ActivatedRoute) {}



  ngOnInit() {


    this._clientService.log()
    this.form = this._fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.max(250)]],
      status: [null, [Validators.required, Validators.pattern]],
      email: [null, [ Validators.required, Validators.email ]]

      // id: [client.id]
    })

  }

  onClose() {
    this.modalService._hideModal()
    this.modalService._hideBackdrop()
  }

  openModal() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  onSubmit() {
    this.submitted = true
    if(this.form.valid) {
      this._clientService.addClients(this.form.value, this.form.value).subscribe(
        (success) => console.log("Sucesso")
      )
    }
  }

  hasError(field: string) {
    return this.form.get(field)?.errors

  }

  getErrors() {

  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    this.onClose()
  }
}
