import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/models/appState';
import { showResumeCards } from '../../core/selectors/resume';
import { Observable } from 'rxjs/Observable';
import { ResumeCard } from '../../core/models/resume';
import * as ResumeActions from '../../core/actions/resume';
import 'rxjs/add/operator/let';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'gth-resume-container',
  styles: [`    
    .gth-resume {
      min-height: 70vh;
    }
  `],
  template: `
    <div class="gth-resume">
      <a routerLink="/resume/editor">edit</a>
      <gth-resume-cardselect (updateFilter)="updateFilter($event)"></gth-resume-cardselect>
      <gth-resume-card *ngFor="let card of resumeStore$ | async" [resumeCard]="card"></gth-resume-card>
    </div>
  `
})
export class ResumeContainerComponent implements OnInit {
  resumeStore$: Observable<ResumeCard[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new ResumeActions.ResumeLoad());
    this.store.dispatch(new ResumeActions.ResumeShowAll());
    this.resumeStore$ = Observable.combineLatest(
      this.store.select('resume'),
      this.store.select('cardFilter')
    )
      .let(showResumeCards());
  }

  updateFilter(update: string) {
    this.store.dispatch({type: update});
  }

}
