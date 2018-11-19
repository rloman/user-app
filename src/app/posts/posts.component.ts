import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  @Input()
  private posts: Post[];


  @Output()  // <= this is the output 
  private voted:EventEmitter<number> = new EventEmitter<number>();

  vote(like: number) {
    this.voted.emit(like);
  }

}
