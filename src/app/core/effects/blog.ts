/**
 * Created by githop on 5/30/17.
 */

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as BlogActions from '../actions/blog';
@Injectable()
export class BlogEffects {

  @Effect()
  loadBlog$ = this.actions$
    .ofType(BlogActions.BLOG_LOAD)
    .switchMap(foo => foo);

  constructor(
    private actions$: Actions) {}
}
