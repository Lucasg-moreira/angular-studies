import { Iclient } from './client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { delay, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private readonly API = `${environment.API}clients`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Iclient[]>(this.API).pipe(delay(1500));
  }

  addClients(ob:Observable<Iclient[]>) {
    return this.
    http.post<Iclient[]>(this.API, ob);
  }
}
