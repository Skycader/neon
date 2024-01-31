import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'neon-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private navbarService: NavbarService) { }

  public openSideNav() {
    this.navbarService.openSideNav();
  }
}
