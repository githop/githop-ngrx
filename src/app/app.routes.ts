import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
/**
 * Created by githop on 5/22/17.
 */

const APP_ROUTES: Routes = [
  { path: '', loadChildren: 'app/layout/layout.module#LayoutModule' },
  { path: 'resume', loadChildren: 'app/resume/resume.module#ResumeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
