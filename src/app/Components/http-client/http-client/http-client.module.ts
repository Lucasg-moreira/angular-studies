import { ClientsService } from './../clients.service';

import { AppModule } from './../../../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutes } from './http-route.routing';
import { RouterModule } from '@angular/router';
import { DropDownInput } from './../../dropdown-input/dropdown-input.component';
import { ClientsFormComponent } from './../../clients-form/clients-form.component';
import { EditarComponent } from '../../clients-form/editar/editar.component';
import { AlertCardComponent } from './../../alert-card/alert-card.component';
import { HttpClientComponent } from './../http-client.component';
import { AlertModal } from '../../alert-modal/alert-modal.component';
import { ModalAddComponent } from './../../modal-add/modal-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropDownInput,
    ClientsFormComponent,
    EditarComponent,
    HttpClientComponent,
    AlertCardComponent,
    AlertModal,
    ModalAddComponent


  ],
  imports: [
    CommonModule,
    HttpRoutes,
    FormsModule

  ],
  exports: [EditarComponent ],
  providers: [
    ClientsService
  ]
})
export class HttpClientModule { }
