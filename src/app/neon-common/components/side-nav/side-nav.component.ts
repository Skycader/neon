import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'neon-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  public get isSideNav() {
    return this.navbarService.isSideNav;
  }
  constructor(private navbarService: NavbarService) { }

  public toggleSideNav() {
    this.navbarService.toggleSideNav();
  }
}
