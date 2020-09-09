import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  public user = null;

  constructor(
    public postService: PostService
  ) { }

  ngOnInit(): void {
    this.user = this.postService.currentUser;
  }

}
