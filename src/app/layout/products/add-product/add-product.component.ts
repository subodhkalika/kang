import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@app/shared/services/category.service';
import { ProductService } from '@app/shared/services/product.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
	public addProductForm:FormGroup;

	public categories = [];

	constructor(
		private CategoryService: CategoryService,
		private ProductService: ProductService,
		private router: Router,
		private snackBar: MatSnackBar
	) { }
	
	ngOnInit() {
		this.addProductForm = new FormGroup({
			product_name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			product_price: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			product_quantity: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			product_lot: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			category_id: new FormControl('', [Validators.required, Validators.maxLength(60)]),
		});

		this.CategoryService.getAllCategories().subscribe(response => this.categories = response.categories);
	}

	addProduct(productData) {
		this.ProductService.createProduct(productData).subscribe(
			data => this.handleResponse(data),
			error => this.handleError(error),
		);
	}

	handleResponse(data) {
		this.snackBar.open(
			"You have successfully added a new Product",
			'Okay',
			{
				duration: 7000,
			}
		);
		this.router.navigateByUrl('/products');
	}

	handleError(error) {
		// this.error = error.error.errors;
	}
}
