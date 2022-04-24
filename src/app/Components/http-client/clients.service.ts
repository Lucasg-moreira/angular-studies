import { Iclient } from './client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { delay, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private readonly API = `${environment.API}clients`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Iclient[]>(this.API).pipe(delay(1500));
  }

  addClients(client_name: Observable<string>, status: Observable<string>) {
    return this.http.post(this.API, client_name).pipe(take(1))
  }

  log() {
    this.http.get(this.API).subscribe( json => console.log(json) );
  }
}
