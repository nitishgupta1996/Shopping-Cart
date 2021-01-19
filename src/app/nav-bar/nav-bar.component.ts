import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isAuthenticated = false; // property to hide or show login and logout
  username: string; // property to display username in nav-bar

  constructor(
    private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.getUsername();
  }

  // method to get username to display
  getUsername(): void {
    this.username = localStorage.getItem('username');
    if (localStorage.getItem('token')) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  // method to logout from application
  onLogout(): void {
    localStorage.clear();
    this.getUsername();
    this.toastr.success('Successfully', 'Logout');
  }

  onShowCart(): void {
    if (this.username) {
      this.route.navigate(['cart']);
    }
    else {
      this.toastr.info('You Need to Login', 'For Cart');
    }
  }

}
