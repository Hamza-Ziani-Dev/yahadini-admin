import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private HttpClient : HttpClient) { }


  getAllProducts(){
    return this.HttpClient.get('https://fakestoreapi.com/products');
  }

  getAllCategories(){
    return this.HttpClient.get('https://fakestoreapi.com/products/categories');
  }

  
// Filter Categories Use Item:
  filterByCategoryUseItem(category: string): void {
    this.getCategoriesByName(category);
  }
  
  getCategoriesByName(keysName : string){
    return this.HttpClient.get('https://fakestoreapi.com/products/category/'+keysName);
  }


  
  getProductById(id:any){
    return this.HttpClient.get('https://fakestoreapi.com/products/'+id);
  }

  createProduct(model:any){
    return this.HttpClient.post('https://fakestoreapi.com/products',model);
  }
}
