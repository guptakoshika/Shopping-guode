import { Component, OnInit } from '@angular/core';
import { LoginGuard } from '../login.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginguard : LoginGuard, private router : Router) { }

  ngOnInit() { }

  logout(){
    this.loginguard.setIsAuthorized(false);
    this.router.navigate(['/login'])
  }
}
