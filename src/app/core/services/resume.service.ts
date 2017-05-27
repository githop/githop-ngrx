import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {CardAccomplishment, CardContent, ResumeStore} from '../models';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class ResumeService {
  contents$: FirebaseListObservable<CardContent[]>;
  accomplishments$: FirebaseListObservable<CardAccomplishment[]>;
  constructor(private db: AngularFireDatabase) {
    this.contents$ = db.list('resume/contents');
    this.accomplishments$ = db.list('resume/accomplishments');
  }

  get contents() {
    return this.contents$;
  }

  get accomplishments() {
    return this.accomplishments$;
  }

  load(): Observable<ResumeStore> {
    return Observable.combineLatest(
      this.contents,
      this.accomplishments,
      (cards, accomplishments) => ({cards, accomplishments})
    );
  }
}
