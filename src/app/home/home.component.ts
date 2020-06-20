import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/content /categories.json';
import { Categories } from '../classes/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log( (data as Categories[]).default );
  }

}
