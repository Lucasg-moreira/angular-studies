import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-input-decorators',
  templateUrl: './input-decorators.component.html',
  styleUrls: ['./input-decorators.component.css']
})
export class InputDecoratorsComponent implements OnInit {
  @Input() nome = 'angular'


  constructor() { }

  ngOnInit(): void {
  }

}
