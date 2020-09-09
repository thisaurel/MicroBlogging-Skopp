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
    let lastPost = this.data.posts.slice(-1)[0];
    let newId = (lastPost != null) ? lastPost.id + 1 : 0;
    let newPost: any = {
      id: newId,
      content: post.content
    };
  this.data.posts.push(newPost);
  }


}
