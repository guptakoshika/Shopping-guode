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
    //TODO: send the username and pasword to backedn for validation.
   let crediants = {
      username : this.username,
      password : this.password
    }
    this.loginService.validateUser(crediants).subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/home']);
  }
}
