import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginGuard } from 'src/app/login.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginguard: LoginGuard, private router: Router) { }

  ngOnInit() { }

  logout() {
    this.loginguard.setIsAuthorized(false);
    this.router.navigate(['/login']);
  }
}
