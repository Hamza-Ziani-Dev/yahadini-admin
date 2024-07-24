import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { SharedModule } from '../../../shared/shared/shared.module';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [SharedModule, SpinnerComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  id!: number;
  data : any = {};

  isLoading : boolean = false;

  constructor(
    private activitedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.id = this.activitedRoute.snapshot.params['id'];
  }

ngOnInit(): void {
this.getProductById();
  
}

  getProductById() {
    this.isLoading = true;
    return this.productsService.getProductById(this.id).subscribe((res) => {
        this.data = res;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      });
  }
}
