import { Component, Input } from '@angular/core';
import { ResumeCard, titleMap } from '../../core/models/resume';



@Component({
  selector: 'gth-resume-card',
  template: `    
    <ng-container *ngIf="resumeCard">
      
      <div class="gth-card">
        <div class="gth-card__header">
          <h2>{{type}}</h2>
        </div>
        <div class="gth-card__body">
          <div *ngFor="let card of resumeCard.contents; let last = last;">
            <div class="body__info">
              <h3>
                <a *ngIf="card.link" [href]="card.link">{{card.title}}</a>
                <span *ngIf="!card.link">{{card.title}}</span>
              </h3>
              <p>{{card.date}}</p>
            </div>

            <h4>{{card.position}}</h4>
            <p [innerHtml]="card.description"></p>
            <ul *ngIf="card.accomplishments">
              <li *ngFor="let accomplishment of card.accomplishments">{{accomplishment.text}}</li>
            </ul>
            <hr *ngIf="!last">
          </div>
        </div>
      </div>
      
    </ng-container>`,
  styles: []
})
export class ResumeCardComponent {
  @Input() resumeCard: ResumeCard;

  get type(): string {
    return (<any>titleMap)[this.resumeCard.type];
  }
}
