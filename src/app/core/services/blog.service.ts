import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Article } from '../models/blog';
/**
 * Created by githop on 5/29/17.
 */

@Injectable()
export class BlogService {
  ref$: FirebaseListObservable<Article[]>;
  constructor(private db: AngularFireDatabase) {
    this.ref$ = db.list('/articles');
  }
}
