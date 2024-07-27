import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
// import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpinnerComponent,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
 
    
  ],
  exports: [
    CommonModule,
    SpinnerComponent,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
 

    
  ]
})
export class SharedModule { }
