import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { User, Login } from './../user';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  private user$!: User[];
  private userPass: string = '';
  private userMail: string = '';


  constructor(
    private _builder: FormBuilder,
    private auth: AuthService,
    private authguard: AuthGuard,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchListUsers();

    this.form = this._builder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    this.getValues();

    if (this.userMail == email && this.userPass == password) {
      this.authguard.user = true
      this.router.navigate(['/pages/home']);
    } else {
      alert('Seu login não foi efetuado. Tente novamente.');
    }
  }

  fetchListUsers() {
    this.auth.getLogin().subscribe((data: any) => (this.user$ = data));
  }

  getValues() {
    let arr = this.user$;
    arr.forEach((element) => {
      return (
        (this.userMail = element.email), (this.userPass = element.password)
      );
    });
  }
}
