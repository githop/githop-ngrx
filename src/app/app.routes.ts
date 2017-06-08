import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LandingComponent} from './layout/landing/landing.component';
/**
 * Created by githop on 5/22/17.
 */

const APP_ROUTES: Routes = [
  { path: '', component: LandingComponent },
  { path: 'resume', loadChildren: 'app/resume/resume.module#ResumeModule' },
  { path: 'login', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
