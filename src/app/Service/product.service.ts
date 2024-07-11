import { HttpClient } from '@angular/common/http';

import { product } from '../datatype';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,@Inject(PLATFORM_ID) private platformId: object) { }

  addProduct(data:product)
  {
  return this.http.post('http://localhost:3000/products',data);
  }

  productList()
  {
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  delete(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);

  }

  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)

  }

  updateProduct(product:product)
  {
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product)
  }

  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=4')

  }
}
