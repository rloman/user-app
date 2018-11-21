import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CanActivateGuard } from './can-activate.guard';

// a json expressing our routes
const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/create',
    component: UserCreateComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: '',
    redirectTo: 'users', // default route // /with only the trailing slash hence !!!! http://localhost:4200/ (redirectTo users)
    pathMatch: 'full'
  },
  {
    path: 'users/:id', // you can make a button now like this <button [routerLink]="['users', user.id]">Show</button>
    component: UserShowComponent
  },
  {
    path: 'users/edit/:id', 
// you can make a button now like this <button [routerLink]="['users', 'edit', user.id]">Edit</button>
    component: UserEditComponent
  },
  {
    path: '**', // this SHOULD!!! be the last entry in your app-routing.module.ts file!!!
		// invalid route => // / !!!! http://localhost:4200/ (redirectTo users)
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
