import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputsModule } from '../inputs/inputs.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    InputsModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
