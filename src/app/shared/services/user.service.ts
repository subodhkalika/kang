import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { MaxCategory } from '@app/_models/category';
import { ParentCategories } from '@app/_models/category';
import { Categories } from '@app/_models/category';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }

	createUser(data) {
		return this.http.post<any>(`${environment.apiUrl}/api/signup`, data);
	}
	
	getAllUsers() {
		return this.http.get<any>(`${environment.apiUrl}/api/users`);
	}

	updateUser(id, data) {
		return this.http.put<any>(`${environment.apiUrl}/api/category-update/${id}`, data);
	}
}
