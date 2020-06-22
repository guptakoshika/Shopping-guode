import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../Filter/postProvider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts = []; 

  constructor(private postProvider : PostProvider, private router: Router) {}

  ngOnInit() {
    this.posts = this.postProvider.getcontent();
  }

  /**
   * This funciton is for redirecting to detail page, for the post clciked.
   * @param id : post id which is clicked
   */
  navigate(id : number){
    this.router.navigate(['/posts', id]);
  }
}