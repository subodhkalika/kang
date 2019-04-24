import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '@app/shared/services/user.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { User } from '@app/_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {

  public displayedColumns = ['id','name','email','phone','address','user_role_slug'];
	public dataSource = new MatTableDataSource<User>();

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(
    private UserService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.UserService.getAllUsers().subscribe(
			response => this.organizeUserData(response.users)
		);
  }

  organizeUserData(users) {
    this.dataSource.data = users;
  }

  createUser() {
    this.router.navigateByUrl('/user-accounts/create');
  }
}
