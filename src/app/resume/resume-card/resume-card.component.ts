import { Component, Input } from '@angular/core';
import {CardTypes, ResumeCard} from '../../core/models/resume';

type TitleMap = {
  [P in CardTypes]: string;
};

@Component({
  selector: 'gth-resume-card',
  template: `    
    <ng-container *ngIf="resumeCard">
      <div>
        <h2>{{type}}</h2>
        <div *ngFor="let card of resumeCard.contents">
          <h4>{{card.title}}</h4>
          <div [innerHtml]="card.description"></div>
          <div *ngIf="card.accomplishments">
            <ul>
              <li *ngFor="let accomplishment of card.accomplishments">{{accomplishment.text}}</li>
            </ul>
          </div>
        </div>
      </div>
    </ng-container>`,
  styles: []
})
export class ResumeCardComponent {
  @Input() resumeCard: ResumeCard;

  get type(): string {
    const titleMap: TitleMap = {
      'experience': 'Professional Experience',
      'sideProjects': 'Side Projects',
      'talks': 'Community / Talks',
      'startup': 'Hackathons',
      'education': 'Education',
      'other': 'Other'
    };
    return (<any>titleMap)[this.resumeCard.type];
  }
}
