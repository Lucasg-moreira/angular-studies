import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CamelCasePipe } from './camel-case.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers: [CamelCasePipe]
})
export class PipesComponent implements OnInit {
  book:any = {
    cleanCode: {
      title: 'Clean code',
      pag: 431,
      language: 'ing',
      price: 275.89,
      desc: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.',
      rating: 4.8,
      data: '12-03-2004'
    }
  }



  constructor() { }

  ngOnInit(): void {

  }

}
