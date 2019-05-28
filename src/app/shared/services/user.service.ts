import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '@app/_models/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private http: HttpClient,
	) { }

	createUser(data) {
		return this.http.post<any>(`${environment.apiUrl}/api/signup`, data);
	}
	
	getAllUsers() {
		return this.http.get<User>(`${environment.apiUrl}/api/users`);
	}

	updateUser(id, data) {
		return this.http.put<any>(`${environment.apiUrl}/api/category-update/${id}`, data);
	}

	getAllDistributors() {
		let user_roles = { roles: ['distribution']};
		return this.http.get<User>(`${environment.apiUrl}/api/users`, { params: user_roles});
	}

}
