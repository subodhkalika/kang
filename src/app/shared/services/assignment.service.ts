import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Assignments } from '@app/_models/assignment';

@Injectable({
	providedIn: 'root'
})
export class AssignmentService {

	constructor(private http: HttpClient) { }

	createAssignment(data) {
		return this.http.post<any>(`${environment.apiUrl}/api/assignment-create`, data);
	}

	getAllAssignments(user) {
		const data = {
			user_id: user.id,
			user_role: user.role
		}
		return this.http.get<Assignments>(`${environment.apiUrl}/api/assignments`, {params: data});
	}

	updateAssignments(id, data) {
		return this.http.put<any>(`${environment.apiUrl}/api/assignment-update/${id}`, data);
	}
}
