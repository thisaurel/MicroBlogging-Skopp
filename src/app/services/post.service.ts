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
    let d = new Date();
    let datestring = d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let newPost: any = {
      id: newId,
      id_utilisateur: 1,
      content: post.content,
      date: datestring,
      nb_like: 0,
      piece_jointe: ''
    };
    this.data.posts.push(newPost);
  }

  public get forHomePage(): any {

    let homePageObject = [];

    let posts = this.data.posts;
    let responses = this.data.responses;
    let features = this.data.features;

    posts.forEach((post: any) => {
      let onePost = post;
      onePost.responses = [];
      onePost.features = [];

      responses.forEach((response: any) => {
        if (response.id_publication === post.id) {
          onePost.responses.push(response);
        }
      });

      features.forEach((feature: any) => {
        if (feature.id_publication === post.id) {
          onePost.features.push(feature);
        }
      });

      homePageObject.push(onePost);
    });

    return homePageObject;
  }

}
