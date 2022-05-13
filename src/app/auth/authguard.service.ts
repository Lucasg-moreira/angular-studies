import { User, Login } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthguardService {
  auth!: boolean;
  constructor() {}

  verifyLogin(user: any) {
    console.log("login", user)
    if (user.value.email == 'admin@gmail.com' && user.value.password == 'admin') {
      this.auth = true;
      alert('logado!');
    } else {
      alert('incorreto!');
    }
  }
}
