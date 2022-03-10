import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  palavras: string[] = [];
  tamanho: any;
  add(){
    this.palavras.push('teste')
  }
  remove(){
    this.palavras.pop()
  }
  exibirTamanho() {
    this.tamanho = this.palavras.length
    console.log(this.tamanho)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
