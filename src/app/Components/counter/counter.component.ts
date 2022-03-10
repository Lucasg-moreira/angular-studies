import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() valor:number = 0;
  @Output() mudouValor = new EventEmitter();


  incrementar(valor: number) {
  this.valor = valor + 1
  this.mudouValor.emit({novoValor: this.valor})
  }
  diminuir(valor: number) {
    this.valor = valor - 1
    this.mudouValor.emit({novoValor: this.valor})
    if (valor < 1) {
    this.valor = 0;

    }
    }
  constructor() { }

  ngOnInit(): void {
  }

}
