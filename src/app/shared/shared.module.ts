import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PostComponent } from './components/post/post.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { InputComponent } from './components/input/input.component';
import { AuthorComponent } from './components/author/author.component';

@NgModule({
  declarations: [
    PostComponent,
    NavComponent,
    ButtonComponent,
    SpinnerComponent,
    InputComponent,
    AuthorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PostComponent,
    NavComponent,
    ButtonComponent,
    SpinnerComponent,
    InputComponent,
    AuthorComponent,
  ]
})
export class SharedModule { }
