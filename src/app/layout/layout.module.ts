import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [LandingComponent, NavComponent, FooterComponent],
  exports: [LandingComponent, NavComponent, FooterComponent]
})
export class LayoutModule { }
