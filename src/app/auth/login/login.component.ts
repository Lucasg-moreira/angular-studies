import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup?: FormGroup;
  login: string = '';


  constructor(private _builder: FormBuilder) { }

  ngOnInit(): void {
    

  }

}
