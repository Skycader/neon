import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorLayoutComponent } from './components/editor-layout/editor-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: EditorLayoutComponent,
  },
];

@NgModule({
  declarations: [EditorLayoutComponent],
  imports: [MaterialModule, CommonModule, RouterModule.forChild(routes)],
})
export class NeonEditorModule { }
