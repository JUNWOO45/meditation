import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }


  login() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });

    this.loginForm.reset();
  }
}
