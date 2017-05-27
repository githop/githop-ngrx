import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LandingComponent } from './landing/landing.component';
import {LayoutRoutesModule} from './layout.routes';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutRoutesModule
  ],
  declarations: [LandingComponent, NavComponent, FooterComponent],
  exports: [LandingComponent, NavComponent, FooterComponent]
})
export class LayoutModule { }
