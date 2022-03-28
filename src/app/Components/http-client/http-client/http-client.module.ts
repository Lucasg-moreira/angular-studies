import { AppModule } from './../../../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutes } from './http-route.routing';
import { RouterModule } from '@angular/router';
import { DropDownInput } from './../../dropdown-input/dropdown-input.component';
import { ClientsFormComponent } from './../../clients-form/clients-form.component';
import { EditarComponent } from '../../clients-form/editar/editar.component';


@NgModule({
  declarations: [
    DropDownInput,
    ClientsFormComponent,
    EditarComponent

  ],
  imports: [
    CommonModule

  ],
  exports: [ClientsFormComponent, EditarComponent]
})
export class HttpClientModule { }
