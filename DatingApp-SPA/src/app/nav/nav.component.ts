import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authServices: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authServices.login(this.model).subscribe(next => {
      this.alertifyService.success('Logged is successfully');
    }, error => {
      this.alertifyService.error(error);
    });
  }

  loggedIn(){
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authServices.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertifyService.warning('logged out')
  }

}
