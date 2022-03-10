import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  switchProps: boolean = false;

  back: string = ''
  color: string = ''

  constructor() { }
  switch() {
    this.switchProps = !this.switchProps;
  }
  ngOnInit(): void {

  }

}
