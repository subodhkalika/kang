import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssignmentService } from '@app/shared/services/assignment.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ProductService } from '@app/shared/services/product.service';
import { UserService } from '@app/shared/services/user.service';

@Component({
  selector: 'app-assign-products',
  templateUrl: './assign-products.component.html',
  styleUrls: ['./assign-products.component.scss']
})
export class AssignProductsComponent implements OnInit {

  public assignProductForm: FormGroup;
	public distributors = [];
  public products = [];
	  
	constructor(
		private AssignmentService: AssignmentService,
		private router: Router,
    private snackBar: MatSnackBar,
    private ProductService: ProductService,
    private UserService: UserService
	) { }

	ngOnInit() {
		this.assignProductForm = new FormGroup({
      distributor_id: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			product_id: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			quantity: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			unit_price: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    });
    
    this.UserService.getAllDistributors().subscribe(response => {
      this.distributors = response.users;
    });

    this.ProductService.getAllProducts().subscribe(response => {
      this.products = response.products;
    });

	}
	
	assignProduct(assignProductData) {
		this.AssignmentService.createAssignment(assignProductData).subscribe(
			data => this.handleResponse(data),
      error => this.handleError(error),
		);
	}

	handleResponse(data) {
		this.snackBar.open(
			"You have successfully assigned the product",
			'Okay',
			{
				duration: 7000,
			}
		);
		this.router.navigateByUrl('/product-assignments');
	}
	
	handleError(error) {
		// this.error = error.error.errors;
	}

}
