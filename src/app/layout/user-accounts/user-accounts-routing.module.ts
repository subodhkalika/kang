import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListsComponent } from './user-lists/user-lists.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: UserListsComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountsRoutingModule { }
