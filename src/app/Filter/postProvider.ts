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
        {"id": 1,"src" : "assets/Images/pizza.jpg" , "title" : "Pizza", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 2,"src" : "assets/Images/food_03.jpg" , "title" : "Samosa", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 3,"src" : "assets/Images/food_03.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 4,"src" : "assets/Images/food_04.jpeg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 5,"src" : "assets/Images/game_01.jpg" , "title" : "blah", "content" : "Something", "category" : "Sports", "isEditorChoice" : "yes"},
        {"id": 6,"src" : "assets/Images/game_02.jpg" , "title" : "blah", "content" : "Something", "category" : "Sports", "isEditorChoice" : "yes"},
        {"id": 7,"src" : "assets/Images/game_03.jpg" , "title" : "blah", "content" : "Something", "category" : "Sports", "isEditorChoice" : "yes"},
        {"id": 8,"src" : "assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 9,"src" : "assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 10,"src" : "assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 11,"src" : "assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 12,"src" : "assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 13,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 14,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 15,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 16,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 17,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
        {"id": 18,"src" : "src/assets/Images/burger.jpg" , "title" : "blah", "content" : "Something", "category" : "Food", "isEditorChoice" : "yes"},
      ]