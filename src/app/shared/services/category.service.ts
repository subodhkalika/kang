import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { MaxCategory } from '@app/_models/category';
import { ParentCategories } from '@app/_models/category';
import { Categories } from '@app/_models/category';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	constructor(private http: HttpClient) { }

	createCategory(data) {
		return this.http.post<any>(`${environment.apiUrl}/api/category-create`, data);
	}

	getAllCategories() {
		return this.http.get<Categories>(`${environment.apiUrl}/api/categories`);
	}

	updateCategory(id, data) {
		return this.http.put<any>(`${environment.apiUrl}/api/category-update/${id}`, data);
	}

	getMaxCategoryLevel() {
		return this.http.get<MaxCategory>(`${environment.apiUrl}/api/categories-max-level`);
	}

	getParentCategories(level) {
		return this.http.get<ParentCategories>(`${environment.apiUrl}/api/parent-categories/${level}`);
	}

}
