import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() link: string = '';
  constructor() {}

  ngOnInit(): void {}
}
