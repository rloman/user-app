import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private posts: Post[];

	// dependency injects the userService here as a field / instance var
  constructor() {

   }

  ngOnInit() {
     
  }

}
