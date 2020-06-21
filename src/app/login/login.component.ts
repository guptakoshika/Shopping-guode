import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router : Router, private loginService : LoginService) { }

  ngOnInit() {
  }
  onSubmit(){
   let crediants = {
      username : this.username,
      password : this.password
    }
    this.loginService.validateUser(crediants).subscribe(data => this.processResponse(), error => this.processError());
  }

  processResponse(){
      this.router.navigate(['/home']);
  }

  processError() {
    //show error in front end 
  }
}
