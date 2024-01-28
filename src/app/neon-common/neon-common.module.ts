import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const Components = [NavbarComponent, SideNavComponent];
@NgModule({
  declarations: [...Components],
  imports: [MaterialModule, CommonModule],
  exports: [...Components],
})
export class NeonCommonModule { }
