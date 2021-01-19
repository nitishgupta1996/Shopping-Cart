import { LoginModel } from './../models/shopping-cart.models';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string; // username to pass parameter in login
  password: string; // password to pass parameter in login
  isLoading: boolean; // property to hide or show loader

  constructor(private route: Router, private loginService: LoginService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  // method to login user in application
  onLogin(): void {
    this.loginService.getLogin(this.username, this.password).subscribe((result: LoginModel) => {
      this.isLoading = true;
      console.log(result);
      const token = result.accessToken;
      const username = result.username;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      if (token && username) {
        this.route.navigate(['/home']);
        this.toastr.success('Successfully', 'Login');
      } else {
        this.toastr.warning('Password or Username is Incorrect');
      }
      this.isLoading = false;
    });
  }

}
