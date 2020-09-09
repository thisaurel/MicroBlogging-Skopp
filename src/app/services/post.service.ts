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
      contenu: post.content,
      date: datestring,
      nb_like: 0,
      piece_jointe: ''
    };
    console.log(newPost);
    this.data.posts.push(newPost);
  }

  public createFeature(id_publication: number, category: number) {
    let lastFunctionality = this.data.features.slice(-1)[0];
    let newId = (lastFunctionality != null) ? lastFunctionality.id + 1 : 0;
    let publication = id_publication;
    let d = new Date();
    let datestring = d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let newFeature: any = {
      id: newId,
      id_categorie: category,
      id_publication: publication,
      id_utilisateur: 1,
      date: datestring
    };

    if (category === 1) {
      let myPost = this.data.posts.filter((m) => m.id == id_publication);
      myPost.nb_like++;
    }

   this.data.features.push(newFeature); 
   console.log(this.data.features)
  }

  public get forHomePage(): any {

    let homePageObject = [];

    let posts = this.data.posts;
    let responses = this.data.responses;
    let features = this.data.features;
    let categories = this.data.categories;
    let users = this.data.users;

    posts.forEach((post: any) => {
      let onePost = post;
      onePost.responses = [];
      onePost.features = [];
      onePost.user = {};

      responses.forEach((response: any) => {
        response.user = {};
        if (response.id_publication === post.id) {
          onePost.responses.push(response);
        }
        users.forEach((user: any) => {
          if (user.id === response.id_utilisateur) {
            response.user = user;
          }
        });
      });

      users.forEach((user: any) => {
        if (user.id === post.id_utilisateur) {
          onePost.user = user;
        }
      });

      features.forEach((feature: any) => {
        feature.type = null;
        if (feature.id_publication === post.id) {
          onePost.features.push(feature);
        }
        categories.forEach((category: any) => {
          if (feature.id_categorie === category.id) {
            feature.type = category.nom;
          }
        });
      });

      homePageObject.push(onePost);
    });

    return homePageObject;
  }

  public get forSavePage(): any {

    let savePageObject = [];

    let posts = this.data.posts;
    let responses = this.data.responses;
    let features = this.data.features;
    let categories = this.data.categories;
    let users = this.data.users;

    posts.forEach((post: any) => {
      features.forEach((feature: any) => {
        if (feature.id_categorie === 1) {

        }
      });
    });

    return savePageObject;
  }

}
