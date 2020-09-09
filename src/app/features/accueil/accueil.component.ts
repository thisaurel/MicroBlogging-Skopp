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
  public postInputHTML: string;


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

  public reponseSkopp(post_id: number): void {
    const skopp = this.responseForm.value.reponseInput;
    if (typeof skopp === 'string' ) {
      if (skopp !== '') {
        const mySkopp = {
          id: post_id,
          content: skopp,
        }
        this.postService.createReponse(mySkopp);
        this.postsList = this.postService.forHomePage;
        this.responseForm.reset();
      }
    }
  }

  public addFeatureToPost(postId: number, category: number): void {
    this.postService.createFeature(postId, category);
  }


}
