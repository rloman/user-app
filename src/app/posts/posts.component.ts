import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  posts: Post[];

	// dependency injects the userService here as a field / instance var
  constructor() {

   }

  ngOnInit() {
     
  }

}
