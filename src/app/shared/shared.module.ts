import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PostComponent } from './components/post/post.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    PostComponent,
    NavComponent,
    ButtonComponent,
    SpinnerComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PostComponent,
    NavComponent,
    ButtonComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
