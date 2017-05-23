import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/models/appState';
import {ResumeActions} from '../../core/actions/resume';
import 'rxjs/add/operator/let';
import {resumeCards, groupByCardType} from '../../core/selectors/resume';

@Component({
  selector: 'gth-resume-container',
  template: `
    <div *ngFor="let cards of resumeStore$ | async">
      <div>
        <h4>{{cards.title}}</h4>
        <div *ngFor="let card of cards.contents">
          {{card.title}}
          <div [innerHtml]="card.description"></div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ResumeContainerComponent implements OnInit {
  resumeStore$;
  constructor(private store: Store<AppState>, private actions: ResumeActions) { }

  ngOnInit() {
    this.store.dispatch(this.actions.loadResume());
    this.resumeStore$ = this.store.select('resume')
      .let(groupByCardType());
  }

}
