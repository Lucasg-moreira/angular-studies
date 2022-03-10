import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-elvis',
  templateUrl: './operator-elvis.component.html',
  styleUrls: ['./operator-elvis.component.css']
})
export class OperatorElvisComponent implements OnInit {


  people: any = {
    lucas: {
      idade: null,
      end:'qd 10, lt 7'
    },
    ana: {
      idade: 20,
      end: null
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
