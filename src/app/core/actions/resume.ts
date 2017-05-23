/**
 * Created by githop on 5/22/17.
 */
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {ResumeStore} from '../models';

@Injectable()
export class ResumeActions {
  static LOAD_RESUME = 'LOAD_RESUME';
  static LOAD_RESUME_SUCCESS = 'LOAD_RESUME_SUCCESS';
  static LOAD_RESUME_FAIL = 'LOAD_RESUME_FAIL';
  loadResume(): Action {
    return {
      type: ResumeActions.LOAD_RESUME
    };
  }

  loadResumeSuccess(payload: ResumeStore): Action {
    return {
      type: ResumeActions.LOAD_RESUME_SUCCESS,
      payload
    };
  }

  loadResumeFail(payload): Action {
    return {
      type: ResumeActions.LOAD_RESUME_FAIL,
      payload
    };
  }
}
