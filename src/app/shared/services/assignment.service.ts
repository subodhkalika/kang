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

	getAllAssignments() {
		return this.http.get<Assignments>(`${environment.apiUrl}/api/assignments`);
	}

	updateAssignments(id, data) {
		return this.http.put<any>(`${environment.apiUrl}/api/assignment-update/${id}`, data);
	}
}
