import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSliderModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { UserAccountsRoutingModule } from './user-accounts-routing.module';
import { UserListsComponent } from './user-lists/user-lists.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserListsComponent, UserCreateComponent],
  imports: [
    CommonModule,
    UserAccountsRoutingModule,
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
export class UserAccountsModule { }
