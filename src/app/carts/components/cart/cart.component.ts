import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared/shared.module';
import { MaterialModule } from '../../../material/material.module';
import { CartsService } from '../services/carts.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    SharedModule,
    MaterialModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  productsInCart : any[] = [];
  total : number = 0;
  success : boolean = false;

  constructor(private cartService : CartsService) {}


  ngOnInit(): void {
    this.getAllCarts();
    
  }

  // get cart products
  getAllCarts(){
    this.cartService.getAllCarts().subscribe((res:any)=>{
      this.productsInCart = res;
    });
  }








  // remove item
  removeItem(item : any){
    this.productsInCart.splice(item, 1);
    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
    
  }

  viewItem(item:any){

  }




 
}
