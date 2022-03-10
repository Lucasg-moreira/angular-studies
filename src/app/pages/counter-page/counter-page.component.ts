import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent implements OnInit {
  onMudouValor(e: any){
    console.log(e.novoValor)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
