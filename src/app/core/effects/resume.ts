/**
 * Created by githop on 5/22/17.
 */
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {ResumeService} from '../services/resume.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as ResumeActions from '../actions/resume';

@Injectable()
export class ResumeEffects {

    @Effect()
    loadResume$ = this.actions$
      .ofType(ResumeActions.LOAD_RESUME)
      .switchMap(_ => this.resumeService.load())
      .map((payload) => new ResumeActions.ResumeLoadSuccess(payload))
      .catch(err => Observable.of(new ResumeActions.ResumeLoadFail(err)));

  constructor(
    private actions$: Actions,
    private resumeService: ResumeService) {}
}
