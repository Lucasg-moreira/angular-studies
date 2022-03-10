import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../shared/cursos.service';

@Component({
  selector: 'app-receber-curso',
  templateUrl: './receber-curso.component.html',
  styleUrls: ['./receber-curso.component.css']

})
export class ReceberCursoComponent implements OnInit {

  curso:any = '';

  constructor(private _cursoService: CursosService) { }

  ngOnInit(): void {
    this._cursoService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    )
  }

}
