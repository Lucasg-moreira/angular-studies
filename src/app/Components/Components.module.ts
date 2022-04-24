import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HttpClientComponent } from './http-client/http-client.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { NgxDropdownComponent } from './ngxDropdown/ngxDropdown.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { ClientsService } from './http-client/clients.service';
import { AlertCardComponent } from './alert-card/alert-card.component';
import { DropDownInput } from './dropdown-input/dropdown-input.component';
import { AlertModal } from './alert-modal/alert-modal.component';
import { ModalAddComponent } from './modal-add/modal-add.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NgxDropdownComponent,
    ClientsFormComponent,
    HttpClientComponent,
    CriarCursoComponent,
    AlertCardComponent,
    DropDownInput,
    AlertModal,
    AlertCardComponent,
    ModalAddComponent,

  ],
  exports: [
    NgxDropdownComponent,
    ClientsFormComponent,
    HttpClientComponent,
    CriarCursoComponent,
  ],
  providers: [
    CamelCasePipe,
    ClientsService
  ]
})
export class ComponentsModule { }