import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSliderModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsListComponent, AddProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
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
export class ProductsModule { }
