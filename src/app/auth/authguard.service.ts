import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  auth!: boolean;
  constructor() { }

  verifyLogin(user: User){
    if(user.email === "admin@gmail.com" && user.password === "admin"){
      this.auth = true;
      alert("logado!");
    }
  }


}
