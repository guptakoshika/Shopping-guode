import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  private selectedId : number; 
  private posts = [];
  filterBy: string = 'food';
  paramName: string = 'category' 
  constructor(private route : ActivatedRoute) { }

  ngOnInit() { 
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    })
   
    console.log(this.posts)
  }

}
