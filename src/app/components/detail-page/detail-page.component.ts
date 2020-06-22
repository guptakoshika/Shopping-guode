import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostProviderService } from 'src/app/services/Post provider/post-provider.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  private selectedId: number;
  private post;

  constructor(private route: ActivatedRoute, private postProvider: PostProviderService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt( params.get('id'), 10 );
    });
    this.postProvider.getPosts().subscribe(data => {
     this.post = data.find(p => p.id === this.selectedId);
   });
  }
}
