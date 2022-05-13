import { User, Login } from './../user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthguardService } from '../authguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  login!: Login;


  constructor(private _builder: FormBuilder, private auth: AuthguardService ) { }

  ngOnInit(): void {
    this.form = this._builder.group({
      email: [''],
      password: ['']
    })


  }

  onSubmit(){
    this.auth.verifyLogin(this.form)
  }

}
