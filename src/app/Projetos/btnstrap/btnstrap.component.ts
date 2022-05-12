import { HtmlTagDefinition } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-btnstrap',
  templateUrl: './btnstrap.component.html',
  styleUrls: ['./btnstrap.component.css']
})

export class BtnstrapComponent implements OnInit {
  valorSalvo: string = ''
  valorAtual = ''
  nome = ''
  @Input() nomeDoCurso = 'Angular'

  mouseClick(event: MouseEvent) {
    alert('O alerta foi chamado utilizando o event binding')

  }
  valor(event: KeyboardEvent) {
    this.valorSalvo = (<HTMLInputElement>event.target).value;

  }
  valueInput(event: any) {
    this.valorAtual = event;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
