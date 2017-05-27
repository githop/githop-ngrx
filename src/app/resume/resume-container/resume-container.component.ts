import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/models/appState';
import {groupByCardType} from '../../core/selectors/resume';
import {Observable} from 'rxjs/Observable';
import {ResumeCard} from '../../core/models/resume';
import * as ResumeActions from '../../core/actions/resume';
import 'rxjs/add/operator/let';

@Component({
  selector: 'gth-resume-container',
  styles: [`    
    .gth-resume {
      min-height: 70vh;
    }
  `],
  template: `
    <div class="gth-resume">
      <gth-resume-card *ngFor="let card of resumeStore$ | async" [resumeCard]="card"></gth-resume-card>
    </div>
  `
})
export class ResumeContainerComponent implements OnInit {
  resumeStore$: Observable<ResumeCard[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new ResumeActions.ResumeLoad());
    this.resumeStore$ = this.store.select('resume')
      .let(groupByCardType());
  }

}
