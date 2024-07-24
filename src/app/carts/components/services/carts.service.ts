import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private HttpClient : HttpClient) { }


 getAllCarts(){
  return this.HttpClient.get('https://fakestoreapi.com/carts');
 }
}
