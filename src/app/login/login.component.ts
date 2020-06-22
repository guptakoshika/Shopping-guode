import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LoginGuard } from '../login.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isAdmin : boolean;

  constructor(private router : Router, private loginService : LoginService, private loginGuard: LoginGuard) { }

  ngOnInit() {
    this.isAdmin = false;
  }
  onSubmit(){
   let crediants = {
      username : this.username,
      password : this.password
    }
    this.loginService.validateUser(crediants).subscribe(data => this.processResponse(), error => this.processError());
  }

  processResponse(){
      this.loginGuard.setIsAuthorized(true);
      this.router.navigate(['/shopping-guide']);
  }

  processError() {
    this.isAdmin = true;
  }
}
