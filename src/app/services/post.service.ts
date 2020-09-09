import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private data: DataService,
  ) { }

  public get all(): any {
    return this.data.posts;
  }
  
  public createPost(post: any) {
    const listLength = this.data.posts.length;
    let lastPost = this.data.posts.slice(-1)[0];
    let newId = (lastPost != null) ? lastPost.id + 1 : 0;
    let newPost: any = {
      id: newId,
      
    };
  this.data.posts.push(newPost);

  }
}
