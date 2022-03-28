import { Component, OnInit, TemplateRef } from '@angular/core';

import { of, Observable, from, interval, catchError, Subject } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ClientsService } from './clients.service';
import { Iclient } from './client';

import { AlertModal } from '../alert-modal/alert-modal.component'


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
})
export class HttpClientComponent implements OnInit {


  clients$: Observable<any> = of();
  err$ = new Subject<boolean>();
  modalRef?: BsModalRef;

  constructor(
    private _service: ClientsService,
    private modalService: BsModalService,

  ) {}

  ngOnInit(): void {
    // this._service.list().subscribe(dados => this.clients = dados)
    this.onRefresh()

  }


  onRefresh() {
    this.clients$ = this._service.list().pipe(
      catchError(
        (err) => {
        console.error(err);
        // this.err$.next(true)
        this.onError()
        return of();
      })
    );
    this.err$.next(false)
  }

  onError() {
    this.modalRef = this.modalService.show(AlertModal);
    this.modalRef.hide()
  }

  del() {
    this._service.remove();
  }
}
