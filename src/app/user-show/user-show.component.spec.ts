import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowComponent } from './user-show.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from '../posts/posts.component';

describe('UserShowComponent', () => {
  let component: UserShowComponent;
  let fixture: ComponentFixture<UserShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShowComponent, PostsComponent ],
      imports: [FormsModule, RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.onVoted(3);

    expect(component.likes).toBe(3);
  });
});
