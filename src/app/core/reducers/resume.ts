import {Action} from '@ngrx/store';
import * as ResumeActions from '../actions/resume';
import {initialResumeState} from '../models/resume';
/**
 * Created by githop on 5/21/17.
 */

export function resumeReducer(state = initialResumeState, action: Action) {
  switch (action.type) {
    case ResumeActions.LOAD_RESUME_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
