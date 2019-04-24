import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSliderModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { CategoriesComponent } from './categories.component';
import { AddCategoryComponent } from './add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoriesComponent, AddCategoryComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class CategoriesModule { }
