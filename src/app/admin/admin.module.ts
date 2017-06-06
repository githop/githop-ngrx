import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from '../core/core.module';
import { LoginComponent } from './login/login.component';
import {AdminRoutesModule} from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AdminRoutesModule
  ],
  declarations: [LoginComponent]
})
export class AdminModule { }
