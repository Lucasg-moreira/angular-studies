import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Tabela'
  text: string = 'Uma tabela que recebe dados via http.'
  link: string = 'dt'

  title_2: string = 'Property bind'
  text_2: string = 'Algumas funções do angular em funcionamento com property bind'

  title_3: string = 'Tabela com requisições http'
  text_3: string = 'teste'
  constructor() { }

  ngOnInit(): void {
  }

}
