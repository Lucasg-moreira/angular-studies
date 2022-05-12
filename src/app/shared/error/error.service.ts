import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private modalService: BsModalService) { }

  onClose() {
    this.modalService._hideModal()
    this.modalService._hideBackdrop()
    console.log('chamando')
  }
}
