import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value.email);
    console.log(form.value.password);
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
