import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SignComponent } from './sign/sign.component';
import { SignoutComponent } from './signout/signout.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SignComponent, SignoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AuthModule {}
