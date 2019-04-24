import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { AddCategoryComponent } from './add-category.component';

const routes: Routes = [
    {
        path: '',
        component: CategoriesComponent
    },
    {
      path: 'add',
      component: AddCategoryComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
