/**
 * Created by githop on 5/22/17.
 */
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {ResumeActions} from '../actions/resume';
import {ResumeService} from '../services/resume.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ResumeEffects {
  constructor(
    private actions$: Actions,
    private resumeService: ResumeService,
    private resumeActions: ResumeActions) {}

    @Effect()
    loadResume$ = this.actions$
      .ofType(ResumeActions.LOAD_RESUME)
      .switchMap(_ => this.resumeService.load())
      .map((payload) => this.resumeActions.loadResumeSuccess(payload))
      .catch(err => Observable.of(this.resumeActions.loadResumeFail(err)));
}
