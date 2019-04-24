import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '@app/shared/services/category.service';
import { Categories } from '@app/_models/category';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

	public displayedColumns = ['id', 'category_name', 'category_level'];
	public dataSource = new MatTableDataSource<Categories>();

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	
	constructor(
		private CategoryService: CategoryService
	) { }

	ngOnInit() {
		this.CategoryService.getAllCategories().subscribe(
			response => this.organizeCategoryData(response.categories)
		);
	}

	organizeCategoryData(categories) {
		this.dataSource.data = categories;
	}

	applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
