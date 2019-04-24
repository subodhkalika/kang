import { Component, OnInit, ViewChild } from '@angular/core';
import { AssignmentService } from '@app/shared/services/assignment.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Categories } from '@app/_models/category';

@Component({
	selector: 'app-assignments',
	templateUrl: './assignments.component.html',
	styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

	public displayedColumns = ['id', 'distributor_name', 'product', 'quantity', 'unit_price', 'assigned_by', 'created_at'];
	public dataSource = new MatTableDataSource<Categories>();

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	
	constructor(
		private AssignmentService: AssignmentService,
	) { }

	ngOnInit() {
		this.AssignmentService.getAllAssignments().subscribe(
			response => this.organizeAssignmentData(response.assignments)
		);
	}

	organizeAssignmentData(assignments) {
		this.dataSource.data = assignments;
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
