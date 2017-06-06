import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/models/appState';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'gth-resume-editor',
  template: `    
    <div>
      
      user?
      
    </div>
  `,
  styles: []
})
export class ResumeEditorComponent implements OnInit {
  user$: Observable<firebase.User>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('user')
      .subscribe((user: any) => console.log('aha!!', user));
  }

}
