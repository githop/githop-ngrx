/**
 * Created by githop on 5/22/17.
 */
import {Action} from '@ngrx/store';
import {ResumeStore} from '../models';

export const LOAD_RESUME = '[RESUME] Load';
export const LOAD_RESUME_SUCCESS = '[RESUME] Load complete';
export const LOAD_RESUME_FAIL = '[RESUME] Load fail';

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

export type ResumeActions =
  ResumeLoad
  | ResumeLoadSuccess
  | ResumeLoadFail;

