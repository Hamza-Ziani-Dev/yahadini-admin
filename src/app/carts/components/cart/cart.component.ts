import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CartsService } from '../services/carts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedModule } from '../../../shared/shared/shared.module';
import { ProductsService } from '../../../products/services/products.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CartsComponent } from '../../../dialogs/carts/carts.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MaterialModule,
    SharedModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  productsInCart : any[] = [];
  total : number = 0;
  success : boolean = false;

  form! : FormGroup;

  details : any = {};

  constructor(
    private cartService : CartsService,
    private productService : ProductsService,
    private formBuilder : FormBuilder,
    public dialog: MatDialog,

  ) {}


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      start : [''],
      end : [''],
    });
      
    this.getAllCarts();
    
  }

  openDialog() {
    this.dialog.open(CartsComponent, {
      width: '900px',
      height: '500px',
      data: this.productsInCart
    });
  }
 

  // get cart products
  getAllCarts(){
    this.cartService.getAllCarts().subscribe((res:any)=>{
      this.productsInCart = res;
    });
  }

  applyFilter(){
    let date = this.form.value;
    this.cartService.getAllCarts(date).subscribe((res:any)=>{
      this.productsInCart = res;
      console.log(date);
    });
  }









  // remove item
  DeleteItemCart(item : any){
    this.cartService.removeItem(item).subscribe((res:any)=>{
      this.getAllCarts();
      alert('Item removed successfully');
     
    });
    
  }

  // view item
  viewItem(item:number){
    // this.productsInCart = [];
    this.details = this.productsInCart[item];
    for (let i in  this.details.products) {
      this.productService.getProductById(this.details.products[i].producId).subscribe((res:any)=>{
         this.productsInCart.push({item:res, quantity:this.details.products[i].quantity});
      });
    }
    console.log(this.details);
  }






 
}
