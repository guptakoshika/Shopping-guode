import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsInterface } from '../../classes/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostProviderService {

  private url = 'assets/data/posts.json';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostsInterface[]> {
    return this.http.get<PostsInterface[]>(this.url);
  }
}
