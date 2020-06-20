import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../Filter/postProvider';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private postProvider : PostProvider ) {
    this.posts = this.postProvider.getcontent();
      console.log(this.posts);
   }

  posts = [];
  ngOnInit() {
      
  }

}
