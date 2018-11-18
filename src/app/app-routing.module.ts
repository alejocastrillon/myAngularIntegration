import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/createUserComponent', pathMatch: 'full'},
  { path: 'createUserComponent', component: CreateUserComponent},
  { path : 'usersComponent', component: UsersComponent},
  { path: 'userComponent', component: UserComponent},
  { path: 'dialogDeleteComponent', component: DialogDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
