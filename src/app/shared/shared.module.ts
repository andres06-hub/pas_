import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PostComponent } from './components/post/post.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PostComponent,
    NavComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PostComponent,
    NavComponent,
    ButtonComponent,
  ]
})
export class SharedModule { }
