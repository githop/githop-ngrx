import {Action} from '@ngrx/store';
import {Article} from '../models/blog';
/**
 * Created by githop on 5/30/17.
 */

export const BLOG_LOAD = '[BLOG] Load';
export const BLOG_LOAD_SUCCESS = '[BLOG] Load success';
export const BLOG_LOAD_FAIL = '[BLOG] Load fail';

export class BlogLoad implements Action {
  readonly type = BLOG_LOAD;
}

export class BlogLoadSuccess implements Action {
  readonly type = BLOG_LOAD_SUCCESS;
  constructor(public payload: Article[]) {}
}

export class BlogLoadFail implements Action {
  readonly type = BLOG_LOAD_FAIL;
  constructor(public payload: any) {}
}

export type BlogActions =
BlogLoad
| BlogLoadSuccess
| BlogLoadFail;
