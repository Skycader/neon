import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  public isSideNav: boolean = false;
  constructor() { }

  public toggleSideNav(): void {
    this.isSideNav = !this.isSideNav;
  }
}
