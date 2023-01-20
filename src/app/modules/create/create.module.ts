import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { createRoutingModule } from './create-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    createRoutingModule,
    SharedModule
  ]
})
export class CreateModule { }
