import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '@app/shared/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  public addUserForm:FormGroup;

	public categories = [];

  private userRoles = [
    {
      value: 'administrator',
      name: 'Admin User'
    },
    {
      value: 'operations',
      name: 'Operational User'
    },
    {
      value: 'distribution',
      name: 'Distributor'
    },
  ];

	constructor(
		private UserService: UserService,
		private router: Router,
		private snackBar: MatSnackBar
	) { }
	
	ngOnInit() {
		this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			password_confirmation: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			phone: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			address: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			role: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    });
	}

	addUser(userData) {
		this.UserService.createUser(userData).subscribe(
			data => this.handleResponse(data),
			error => this.handleError(error),
		);
	}

	handleResponse(data) {
		this.snackBar.open(
			"You have successfully created new User",
			'Okay',
			{
				duration: 7000,
			}
		);
		this.router.navigateByUrl('/user-accounts');
	}

	handleError(error) {
		// this.error = error.error.errors;
	}

}
