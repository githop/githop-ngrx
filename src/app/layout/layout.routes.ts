import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {NgModule} from '@angular/core';
/**
 * Created by githop on 5/22/17.
 */

const LAYOUT_ROUTES: Routes = [
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(LAYOUT_ROUTES)],
  exports: [RouterModule]
})
export class LayoutRoutesModule {}
