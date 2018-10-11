import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserEditComponent } from './user-edit/user-edit.component';

// a json expressing our routes
const routes: Routes = [
  {
		path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/create',
    component: UserCreateComponent
  },
  {
    path: '',
    redirectTo: 'users', // default route // /with only the trailing slash hence !!!! http://localhost:4200/ (redirectTo users)
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'users', // invalid route => // /with only the trailing slash hence !!!! http://localhost:4200/ (redirectTo users)
    pathMatch: 'full'
  },
  {
    path: 'users/:id',
    component: UserShowComponent
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
