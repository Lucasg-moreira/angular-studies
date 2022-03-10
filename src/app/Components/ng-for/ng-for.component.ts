import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  soccer: string[] = ["Messi", "Cristiano Ronaldo", "Kane", "Ronaldo"];


  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < this.soccer.length; index++) {
      const element = this.soccer[index];

    }
  }

}
