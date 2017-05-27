import {Component, EventEmitter, Output} from '@angular/core';
import * as ResumeActions from '../../core/actions/resume';

@Component({
  selector: 'gth-resume-cardselect',
  template: `    
    <select #resumeCards (change)="updateFilter.emit(resumeCards.value)">
      <option *ngFor="let cardSelect of cardTypes" value="{{cardSelect.action}}">
        {{cardSelect.type}}
      </option>
    </select>
  `,
  styles: []
})
export class ResumeCardselectComponent {
  public cardTypes: any = [
    { type: 'All', action: ResumeActions.SHOW_ALL},
    { type: 'Professional Experience', action: ResumeActions.SHOW_EXPERIENCE },
    { type: 'Side Projects', action: ResumeActions.SHOW_SIDEPROJECTS },
    { type: 'Community / Talks', action: ResumeActions.SHOW_TALKS },
    { type: 'Education', action: ResumeActions.SHOW_EDUCATION },
    { type: 'Hackathons', action: ResumeActions.SHOW_STARTUP },
    { type: 'Other', action: ResumeActions.SHOW_OTHER }
  ];
  @Output() updateFilter: EventEmitter<string> = new EventEmitter<string>();
}

