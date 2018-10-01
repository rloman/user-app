import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserShowComponent } from './user-show/user-show.component';

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
    component: UsersComponent // default route
  },
  {
    path: 'users/:id',
    component: UserShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
