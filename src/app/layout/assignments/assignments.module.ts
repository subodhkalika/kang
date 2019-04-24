import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSliderModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { AssignmentsRoutingModule } from './assignments-routing.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignProductsComponent } from './assign-products/assign-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AssignmentsComponent, AssignProductsComponent],
  imports: [
    CommonModule,
    AssignmentsRoutingModule,
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
export class AssignmentsModule { }
