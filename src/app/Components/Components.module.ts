import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgxDropdownComponent } from './ngxDropdown/ngxDropdown.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { ClientsService } from './http-client/clients.service';
import { AlertCardComponent } from './alert-card/alert-card.component';
import { DropDownInput } from './dropdown-input/dropdown-input.component';
import { AlertModal } from './alert-modal/alert-modal.component';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { ErrorComponent } from './error/error.component';
import { CardComponent } from './card/card.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule
  ],
  declarations: [
    NgxDropdownComponent,
    CriarCursoComponent,
    AlertCardComponent,
    DropDownInput,
    AlertModal,
    ModalAddComponent,
    ErrorComponent,
    CardComponent,
  ],
  exports: [
    NgxDropdownComponent,
    CriarCursoComponent,
    ErrorComponent,
    CardComponent,
    ModalAddComponent,
    AlertCardComponent
  ],
  providers: [CamelCasePipe, ClientsService],
})
export class ComponentsModule {}
