import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { ProductsService } from '../../products/services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  categories: any = [];
  products: any = [];
  base64: any;
  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductsComponent>,
    private productsService: ProductsService,
    private FormBuilder: FormBuilder,
    
  ) {}

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required],
    });

    this.products = this.data;
    this.getAllCategories();
    console.log(this.products);
  }

  getAllCategories() {
    this.productsService.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        console.log('====================================');
        console.log(this.categories);
        console.log('====================================');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  FilterCategoriesUseSelect(event: any) {
    const filterValue = event.target.value;
    this.form.get('category')?.setValue(filterValue);
    console.log('====================================');
    console.log(this.form);
    console.log('====================================');
    if (filterValue === 'All') {
      this.getAllCategories();
    } else {
      this.getCategoriesByName(filterValue);
    }
  }

  getCategoriesByName(keysName: string) {
    this.productsService.getCategoriesByName(keysName).subscribe(
      (res: any) => {
        this.products = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }




  closeDialog(): void {
    this.dialogRef.close();
  }

  getPathImge(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue(this.base64);
    };
  }

  addProduct() {
    const model = this.form.value;
    this.productsService.createProduct(model).subscribe((res: any) => {
      alert('Product added successfully');
    });
  }
}
