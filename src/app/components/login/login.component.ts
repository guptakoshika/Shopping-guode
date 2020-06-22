import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService/login.service';
import { LoginGuard } from 'src/app/login.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isAdmin : boolean;

  constructor(private router : Router, private loginService : LoginService, 
    private loginGuard: LoginGuard) { }

  ngOnInit() {
    this.isAdmin = false;
  }

  /**
   * this method is for submitting the form, will validate the input and 
   * process accrodingly.
   */
  onSubmit(){
   let crediants = {
      username : this.username,
      password : this.password
    }
    this.loginService.validateUser(crediants).subscribe(data => this.processResponse(),
     error => this.processError());
  }

  /**
   * this method is used to redirect to home page if crediantials are correct.
   */
  processResponse(){
      this.loginGuard.setIsAuthorized(true);
      this.router.navigate(['/shopping-guide']);
  }

  /**
   * this method is used to show error messgae on wrong credentials.
   */
  processError() {
    this.isAdmin = true;
  }
}
