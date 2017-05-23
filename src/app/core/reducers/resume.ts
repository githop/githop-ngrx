import {Action} from '@ngrx/store';
import {ResumeActions} from '../actions/resume';
/**
 * Created by githop on 5/21/17.
 */

export function resumeReducer(state, action: Action) {
  if (action && action.type) {
    switch (action.type) {
      case ResumeActions.LOAD_RESUME_SUCCESS:
        return action.payload || [];
      default:
        return state;
    }
  }
}
