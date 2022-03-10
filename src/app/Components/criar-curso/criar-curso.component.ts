
import { Component, OnInit, EventEmitter } from '@angular/core';


import { CursosService } from '../../shared/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]

})
export class CriarCursoComponent implements OnInit {

  cursos: any = [];
  value: any = ''
  e: any = ''
  constructor(private _cursosService: CursosService) {  }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
    this._cursosService.addCurso(this.value, this.e);

  }

}
