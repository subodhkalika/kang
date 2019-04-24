import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '@app/_models/product';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  constructor(private http: HttpClient) { }

  createProduct(data) {
    return this.http.post(`${environment.apiUrl}/api/product-create`, data);
  }

  getAllProducts() {
    return this.http.get<Products>(`${environment.apiUrl}/api/products`);
  }

  updateProduct(id, data) {
    return this.http.put(`${environment.apiUrl}/api/product-update/${id}`, data);
  }
}
