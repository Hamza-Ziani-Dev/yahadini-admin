import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpinnerComponent,
    FormsModule,
    RouterLink
    
  ],
  exports: [
    CommonModule,
    SpinnerComponent,
    FormsModule,
    RouterLink
    
  ]
})
export class SharedModule { }
