import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '@app/shared/services/category.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-add-category',
	templateUrl: './add-category.component.html',
	styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
	public addCategoryForm: FormGroup;
	public parentCategoryRequired = false;
	public categoryLevels = [0];

	public parentCategories = [];
	  
	constructor(
		private CategoryService: CategoryService,
		private router: Router,
		private snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.addCategoryForm = new FormGroup({
			category_name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			category_level: new FormControl('', [Validators.required, Validators.maxLength(60)]),
			parent_category_id: new FormControl('', [Validators.required, Validators.maxLength(60)]),
		});

		this.CategoryService.getMaxCategoryLevel().subscribe(response => {
			if(response !== null) {
			  const highestLevelGenerator = response.max_level + 2;
			  this.categoryLevels = Array.from(Array(highestLevelGenerator).keys());
			//   this.parentCategoryRequired = this.categoryLevels.length > 1 ? true : false;
			}
		});
	}
	
	onCategoryLevelChanged($event) {
		this.parentCategoryRequired = false;
		if ($event.value > 0) {
			this.CategoryService.getParentCategories($event.value).subscribe(response => {
				this.parentCategories = response.parent_categories;
			});
			this.parentCategoryRequired = true;
		}
	}

	addCategory(categoryData) {
		this.CategoryService.createCategory(categoryData).subscribe(
			data => this.handleResponse(data),
      		error => this.handleError(error),
		);
	}

	handleResponse(data) {
		this.snackBar.open(
			"You have successfully added a new Category",
			'Okay',
			{
				duration: 7000,
			}
		);
		this.router.navigateByUrl('/categories');
	}
	
	handleError(error) {
		// this.error = error.error.errors;
	}
}
