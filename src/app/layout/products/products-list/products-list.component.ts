import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Products } from '@app/_models/product';
import { ProductService } from '@app/shared/services/product.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
	public displayedColumns = ['id','product_name','product_price','product_lot','category_id'];
	public dataSource = new MatTableDataSource<Products>();

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	
	constructor(
		private ProductService: ProductService
	) { }

	ngOnInit() {
		this.ProductService.getAllProducts().subscribe(
			response => this.organizeCategoryData(response.products)
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
