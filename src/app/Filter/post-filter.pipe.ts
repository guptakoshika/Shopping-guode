import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postFilter'
})
 //pipe for filtering posts according to category
export class PostFilterPipe implements PipeTransform {
/***
 * @param posts: posts for filtering.
 * @param filterBy: 
 * @param paramName: 
 */
 
  transform(posts: any[], filterBy: string, paramName: string): any {
    return posts.filter(item => {
      return item.paramName === filterBy;
    });
  }
}
