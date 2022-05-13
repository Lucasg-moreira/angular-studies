import { User, Login } from './user';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthguardService {
  auth!: boolean;
  constructor(private router: Router) {}


  verifyLogin(user: any) {
    if (user.value.email == 'admin@gmail.com' && user.value.password == 'admin') {
      this.auth = true;
      alert('Logado com sucesso!');
      this.router.navigate(['./home'])
      localStorage.setItem('login', 'true')
    } else {
      alert('Dados incorretos! Tente Novamente');
    }
  }
}
