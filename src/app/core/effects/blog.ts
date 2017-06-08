/**
 * Created by githop on 5/30/17.
 */

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as BlogActions from '../actions/blog';
import {BlogService} from '../services/blog.service';
@Injectable()
export class BlogEffects {

  @Effect()
  loadBlog$ = this.actions$
    .ofType(BlogActions.BLOG_LOAD)
    .switchMap((foo) => this.blogService.ref$)
    .map(articles => new BlogActions.BlogLoadSuccess(articles));

  constructor(
    private blogService: BlogService,
    private actions$: Actions) {}
}
