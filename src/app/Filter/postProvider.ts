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
        {"id": 1,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 2,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 3,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 4,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 5,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 6,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 7,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 8,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 9,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 10,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 11,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 12,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 13,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 14,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 15,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 16,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 17,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 18,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
      ]