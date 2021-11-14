import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class SharedModule {}
