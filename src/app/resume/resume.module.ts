import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from '../core/core.module';
import { ResumeContainerComponent } from './resume-container/resume-container.component';
import {ResumeRoutesModule} from './resume.routes';
import { ResumeCardComponent } from './resume-card/resume-card.component';
import { ResumeCardselectComponent } from './resume-cardselect/resume-cardselect.component';
import { ResumeEditorComponent } from './resume-editor/resume-editor.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ResumeRoutesModule
  ],
  declarations: [ResumeContainerComponent, ResumeCardComponent, ResumeCardselectComponent, ResumeEditorComponent]
})
export class ResumeModule { }
