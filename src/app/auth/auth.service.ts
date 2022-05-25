import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { User, Login } from './user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth!: boolean;
  constructor(private router: Router, private http: HttpClient) {}

  getLogin(): Observable<User>{
    return this.http.get<User>('http://localhost:3000/admin')
  }

  login(user: User) {
    return this.http.post<Login>('http://localhost:3000/login', user)
  }
}
