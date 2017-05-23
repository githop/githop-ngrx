import {RouterModule, Routes} from '@angular/router';
import {ResumeContainerComponent} from './resume-container/resume-container.component';
import {NgModule} from '@angular/core';
/**
 * Created by githop on 5/22/17.
 */


const RESUME_ROUTES: Routes = [
  { path: '', component: ResumeContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(RESUME_ROUTES)],
  exports: [RouterModule]
})
export class ResumeRoutesModule {}
