import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ListaService {

    constructor() { }
    getPrograms() {
      return ["Javascript", "Java", "Ruby", "Python", "React"];
    }
}
