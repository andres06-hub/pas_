import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SharedModule,
    FontAwesomeModule,
  ]
})
export class AuthorsModule { }
