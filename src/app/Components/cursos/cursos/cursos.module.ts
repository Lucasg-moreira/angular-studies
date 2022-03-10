import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from '../../../shared/cursos.service';
import { CursosComponent } from './../cursos.component';
import { CriarCursoModule } from './../../criar-curso/criar-curso/criar-curso.module';
import { ReceberCursoComponent } from '../../receber-curso/receber-curso.component';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CriarCursoModule
  ],
  exports: [CursosComponent],
  providers: [CursosService]
})
export class CursosModule { }
