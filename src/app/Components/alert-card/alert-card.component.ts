import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.css']
})
export class AlertCardComponent implements OnInit {
  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'danger',
      msg: `Não conseguimos conectar com a tabela.`
    }
  ];
  alerts = this.defaultAlerts;


  constructor() { }

  ngOnInit(): void {
  }

}
