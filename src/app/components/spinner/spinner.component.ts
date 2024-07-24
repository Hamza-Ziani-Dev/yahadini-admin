import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { SharedModule } from '../../shared/shared/shared.module';



@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    
  }

}
