import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public postsList = [];

  public postForm = new FormGroup({
    postInput: new FormControl('', [
      Validators.required
    ]),
  });

  public responseForm = new FormGroup({
    reponseInput: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(
    public postService: PostService
  ) { }

  ngOnInit(): void {
    this.postsList = this.postService.forHomePage;
    console.log(this.postsList);
  }

  public createSkopp(): void {
    const skopp = this.postForm.value.postInput;
    if (typeof skopp === 'string' ) {
      if (skopp !== '') {
        const mySkopp = {
          content: skopp,
        }
        this.postService.createPost(mySkopp);
        this.postsList = this.postService.forHomePage;
        this.postForm.reset();
      }
    }
  }

  public reponseSkopp(post: any): void {
    const skopp = this.responseForm.value.reponseInput;
    if (typeof skopp === 'string' ) {
      if (skopp !== '') {
        const mySkopp = {
          id: post.id,
          content: skopp,
        }
        post.responseActive = false;
        this.postService.createReponse(mySkopp);
        this.postsList = this.postService.forHomePage;
        this.responseForm.reset();
      }
    }
  }

  public addFeatureToPost(postId: number, category: number): void {
    this.postService.createFeature(postId, category);
    this.postsList = this.postService.forHomePage;
  }

  public isUserLiked(post: any): boolean {
    let l = post.features.filter((feature) => feature.id_utilisateur === 1 && feature.id_categorie === 1 && feature.id_publication === post.id);
    return l.length > 0;
  }

  public isUserSaved(post: any): boolean {
    let l = post.features.filter((feature) => feature.id_utilisateur === 1 && feature.id_categorie === 2 && feature.id_publication === post.id);
    return l.length > 0;
  }


}
