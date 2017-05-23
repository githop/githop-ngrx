import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LandingComponent } from './landing/landing.component';
import {LayoutRoutesModule} from './layout.routes';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutRoutesModule
  ],
  declarations: [LandingComponent]
})
export class LayoutModule { }
