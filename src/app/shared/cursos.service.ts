import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private curso: any =  ['Angular', 'Php', 'Css']


  getCursos() {
    this.logService.log('Obtendo lista de cursos')
    return this.curso
  }

  addCurso(value: any, e: any) {
    this.logService.log("Criando um novo curso: " + value)
    this.curso.push(value);
    this.emitirCursoCriado.emit(value)
    CursosService.criouNovoCurso.emit(this.curso)
    e.value = ''
  }
  deleteCurso() {
    this.curso.pop()
    this.logService.log('Deletou: ' + this.curso)
  }

  constructor(private logService: LogService) {

    console.log("chamou")
  }
}
