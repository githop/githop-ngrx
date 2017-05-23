import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from '../core/core.module';
import { ResumeContainerComponent } from './resume-container/resume-container.component';
import {ResumeRoutesModule} from './resume.routes';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ResumeRoutesModule
  ],
  declarations: [ResumeContainerComponent]
})
export class ResumeModule { }
