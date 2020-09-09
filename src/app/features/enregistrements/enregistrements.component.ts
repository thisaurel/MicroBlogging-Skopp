import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-enregistrements',
  templateUrl: './enregistrements.component.html',
  styleUrls: ['./enregistrements.component.scss']
})
export class EnregistrementsComponent implements OnInit {

  public postsList = [];
  
  constructor(
    public postService: PostService
  ) { }

  ngOnInit(): void {
    this.postsList = this.postService.savedElements;
  }

}
