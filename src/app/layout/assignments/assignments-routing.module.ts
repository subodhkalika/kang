import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignProductsComponent } from './assign-products/assign-products.component';


const routes: Routes = [
  {
    path: '',
    component: AssignmentsComponent,
  },
  {
    path: 'assign',
    component: AssignProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
