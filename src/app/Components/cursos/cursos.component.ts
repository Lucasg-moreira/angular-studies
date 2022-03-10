import { Component, OnInit } from '@angular/core';

import { CursosService } from '../../shared/cursos.service';


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

  constructor(private _cursosService: CursosService) {
    // this.cursosService = new CursosService();
    this.cursosService = _cursosService;

    ;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
      CursosService.criouNovoCurso.subscribe(
      curso => console.log(curso)
      )
  }

  addCurso(curso: string, e: any) {
  this._cursosService.addCurso(curso, e)
  }
  deleteCurso() {
    this._cursosService.deleteCurso()
  }
}
