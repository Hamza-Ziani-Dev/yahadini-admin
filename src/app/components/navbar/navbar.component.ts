import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SharedModule,
    MaterialModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
