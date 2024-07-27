import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private HttpClient : HttpClient) { }


 getAllCarts(param?:any){
  let params = new HttpParams();
  params = params.append('startDate',param?.startDate).append('endDate',param?.endDate);
  return this.HttpClient.get('https://fakestoreapi.com/carts',{params});
 }


 removeItem(id:number){
  return this.HttpClient.delete('https://fakestoreapi.com/carts/'+id);
 }
}
