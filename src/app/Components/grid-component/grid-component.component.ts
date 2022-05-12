import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zero-config',
  templateUrl: 'grid-component.component.html',
  styleUrls: ['./grid-component.component.css']
})
export class GridComponent implements OnInit{

  @Input() dtOptions: any;
  @Input() gridHeaders: any;
  @Input() gridRows: any;


  headers?: any;
  rows?: string;
  id?: string;
  constructor() {

  }

  ngOnInit() {
    
  }



}
