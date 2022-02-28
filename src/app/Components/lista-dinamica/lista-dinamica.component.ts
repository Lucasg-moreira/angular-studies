import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista-service/lista.service';


@Component({
  selector: 'app-lista-dinamica',
  templateUrl: './lista-dinamica.component.html',
  styleUrls: ['./lista-dinamica.component.css']
})
export class ListaDinamicaComponent implements OnInit {

  NomeSite: string;
  ListProgram: string[];

  
  constructor (private listaService: ListaService) {
    this.NomeSite = "http://www.youtube.com"
    this.ListProgram = this.listaService.getPrograms()
   }

  ngOnInit() {
  }

}
