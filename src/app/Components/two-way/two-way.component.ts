import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  name: any = 'teste'
  pessoas: any = {
    nome: '',
    idade: 0,
    endereco: {
      rua: 'fn 16',
      qd: '10',
      numero: '700'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
