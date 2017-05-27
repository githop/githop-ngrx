/**
 * Created by githop on 5/22/17.
 */
import {Action} from '@ngrx/store';
import {ResumeStore} from '../models';

export const LOAD_RESUME = '[RESUME] Load';
export const LOAD_RESUME_SUCCESS = '[RESUME] Load complete';
export const LOAD_RESUME_FAIL = '[RESUME] Load fail';

export const SHOW_ALL = '[RESUME] Show all';
export const SHOW_EXPERIENCE = '[RESUME] Show experience';
export const SHOW_SIDEPROJECTS = '[RESUME] Show sideProjects';
export const SHOW_TALKS = '[RESUME] Show talks';
export const SHOW_STARTUP = '[RESUME] Show startup';
export const SHOW_EDUCATION = '[RESUME] Show education';
export const SHOW_OTHER = '[RESUME] Show other';

export class ResumeLoad implements Action {
  readonly type = LOAD_RESUME;
}

export class ResumeLoadSuccess implements Action {
  readonly type = LOAD_RESUME_SUCCESS;
  constructor(public payload: ResumeStore) {}
}

export class ResumeLoadFail implements Action {
  readonly type = LOAD_RESUME_FAIL;
  constructor(public payload: any) {}
}

export class ResumeShowAll implements Action {
  readonly type = SHOW_ALL;
}

export class ResumeShowExperience implements Action {
  readonly type = SHOW_EXPERIENCE;
}

export class ResumeShowSideprojects implements Action {
  readonly type = SHOW_SIDEPROJECTS;
}

export class ResumeShowTalks implements Action {
  readonly type = SHOW_TALKS;
}

export class ResumeShowStartup implements Action {
  readonly type = SHOW_STARTUP;
}

export class ResumeShowEducation implements Action {
  readonly type = SHOW_EDUCATION;
}

export class ResumeShowOther implements Action {
  readonly type = SHOW_OTHER;
}

export type ResumeActions =
  ResumeLoad
  | ResumeLoadSuccess
  | ResumeLoadFail
  | ResumeShowAll
  | ResumeShowExperience
  | ResumeShowSideprojects
  | ResumeShowTalks
  | ResumeShowStartup
  | ResumeShowEducation
  | ResumeShowOther;

