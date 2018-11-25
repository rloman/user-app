import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCreateComponent } from './user-create/user-create.component';

import { FormsModule } from '@angular/forms';
import { UserShowComponent } from './user-show/user-show.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCreateComponent,
    UserShowComponent,
    UserEditComponent,
    PostsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, // this Module also re-exports CommonModule which is imported ngIf, ngFor and the now used  async pipe in UsersComponent.html
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
