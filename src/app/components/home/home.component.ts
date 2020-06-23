import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProviderService } from 'src/app/services/Post provider/post-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private posts = [];

  constructor(private router: Router, private postProviderService: PostProviderService) {}

  ngOnInit() {
    this.postProviderService.getPosts().subscribe(data => this.posts = data);
  }

  /**
   * This funciton is for redirecting to detail page, for the post clciked.
   * @param id : post id which is clicked
   */
  navigate(id: number) {
    this.router.navigate(['/posts', id]);
  }
}
