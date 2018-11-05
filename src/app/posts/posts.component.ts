import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  @Input()
  posts: Post[];

  @Output()
  voted = new EventEmitter<number>();

  didVote: boolean;

  vote(like: number) {
    this.voted.emit(like);
    this.didVote = true;
  }

}
