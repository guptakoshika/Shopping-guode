import { Injectable } from "@angular/core";

@Injectable()
export class PostProvider {
  returndata = [] ; 
  
  //for getting posts.
    getcontent(){
        return this.returndata = posts.slice(0);
    }
}
export const posts = [
        {"id": 1, "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"}
    ]