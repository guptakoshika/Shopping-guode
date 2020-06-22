import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsInterface } from '../../classes/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostProviderService {

  private url : string = "assets/data/posts.json";

  constructor(private http : HttpClient) { }
 
  getImages() : Observable<PostsInterface[]> {
    return this.http.get<PostsInterface[]>(this.url);
  }
  
}