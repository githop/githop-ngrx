import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/models/appState';
import * as BlogActions from '../../core/actions/blog';
import {articlesIndex} from '../../core/selectors/blog';
import 'rxjs/add/operator/let';

@Component({
  selector: 'gth-posts-container',
  template: `
    <div>
      <div *ngFor="let article of articles$ | async">
        <pre>{{article | json}}</pre>
      </div>
    </div>
  `,
  styles: []
})
export class PostsContainerComponent implements OnInit {
  articles$: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new BlogActions.BlogLoad());
    this.articles$ = this.store.select('blog')
      .let(articlesIndex());
  }

}
