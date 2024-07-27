import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { CartsService } from '../../carts/components/services/carts.service';
import { ProductsService } from '../../products/services/products.service';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [MaterialModule,SharedModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {
  productsInCart : any[] = [];
  categories : any[] = [];
  total : number = 0;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productsService : ProductsService,
    public dialogRef: MatDialogRef<CartsComponent>
   
  ) {

  }
  OnInit(): void {
  
  }

 

  closeDialog(): void {
    this.dialogRef.close();
  }

    

}
