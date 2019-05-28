import { Component, OnInit, ViewChild } from '@angular/core';
import { AssignmentService } from '@app/shared/services/assignment.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Categories } from '@app/_models/category';
import { AuthenticationService } from '@app/shared/services/authentication.service';

@Component({
	selector: 'app-assignments',
	templateUrl: './assignments.component.html',
	styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

	public displayedColumns = ['id', 'distributor_name', 'product', 'quantity', 'unit_price', 'created_at'];
	public dataSource = new MatTableDataSource<Categories>();

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	
	constructor(
		private AssignmentService: AssignmentService,
		private AuthenticationService: AuthenticationService
	) { }

	ngOnInit() {
		const user = this.AuthenticationService.currentUserValue.user;
		this.AssignmentService.getAllAssignments(user).subscribe(
			response => this.organizeAssignmentData(response.assignments)
		);
	}

	organizeAssignmentData(assignments) {
		this.dataSource.data = assignments.map( assignment => {
			return { 
				...assignment,
				product: '#' + assignment.product_id.toString() + ' | ' + assignment.product_name
			}
		});
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
