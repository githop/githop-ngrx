import {initialBlogState} from '../models/blog';
import {Action} from '@ngrx/store';
import * as BlogActions from '../actions/blog';
/**
 * Created by githop on 6/7/17.
 */

export function blogReducer(state = initialBlogState, action: Action) {
  switch (action.type) {
    case BlogActions.BLOG_LOAD:
      return [state];
    case BlogActions.BLOG_LOAD_SUCCESS:
    case BlogActions.BLOG_LOAD_FAIL:
      return action.payload;
    default:
      return state;
  }
}
