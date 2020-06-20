import { Component, OnInit } from '@angular/core';
import * as posts from 'src/assets/content /posts.json';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(posts);

  }

}
