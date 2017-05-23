import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/models/appState';
import {ResumeActions} from '../../core/actions/resume';

@Component({
  selector: 'gth-resume-container',
  template: `
    <p>
      resume-container Works!
    </p>
  `,
  styles: []
})
export class ResumeContainerComponent implements OnInit {
  resumeStore$;
  constructor(private store: Store<AppState>, private actions: ResumeActions) { }

  ngOnInit() {
    console.log('resume init!');
    this.store.dispatch(this.actions.loadResume());
    this.resumeStore$ = this.store.select(state => state)
      .subscribe(resumeStore => console.log('gtfo!!', resumeStore));
  }

}
