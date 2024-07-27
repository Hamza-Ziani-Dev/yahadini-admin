import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { ProductsService } from '../../products/services/products.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  form!: FormGroup;
  categories : any[] = [];
  products : any ;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    private FormBuilder: FormBuilder,
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.categories = this.data.categories;
    this.products = this.data.products;    

    this.form = this.FormBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required],
    });
  }




 

  updateProduct(item : any) {
  

  }


  closeDialog(): void {
    this.dialogRef.close();
  }

}
