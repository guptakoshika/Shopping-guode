import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  onSubmit(){
    //TODO: send the username and pasword to backedn for validation.
    this.router.navigate(['/home']);
  }
}
