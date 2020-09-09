import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public postsList = [];

  constructor(
    public postService: PostService
  ) { }

  ngOnInit(): void {
    this.postsList = this.postService.forHomePage;
    console.log(this.postsList);
  }

}
