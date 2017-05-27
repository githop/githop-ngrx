import {Action} from '@ngrx/store';
import * as ResumeActions from '../actions/resume';
import {initialResumeState, ResumeCard} from '../models/resume';
import {
  SHOW_ALL, SHOW_EDUCATION, SHOW_EXPERIENCE, SHOW_OTHER, SHOW_SIDEPROJECTS, SHOW_STARTUP,
  SHOW_TALKS
} from '../actions/resume';
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

export function cardFilter(state = (card: ResumeCard) => card, action: Action) {
  switch (action.type) {
    case SHOW_ALL:
      return (card: ResumeCard) => card;
    case SHOW_EXPERIENCE:
      return (card: ResumeCard) => card.type === 'experience';
    case SHOW_SIDEPROJECTS:
      return (card: ResumeCard) => card.type === 'sideProjects';
    case SHOW_TALKS:
      return (card: ResumeCard) => card.type === 'talks';
    case SHOW_STARTUP:
      return (card: ResumeCard) => card.type === 'startup';
    case SHOW_EDUCATION:
      return (card: ResumeCard) => card.type === 'education';
    case SHOW_OTHER:
      return (card: ResumeCard) => card.type === 'other';
    default:
      return state;
  }
}
