/**
 * Created by githop on 5/28/17.
 */

import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AppState} from '../models/appState';
import {Store} from '@ngrx/store';
import {LoginSuccessAction} from '../actions/user';

@Injectable()
export class UserService {
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private store: Store<AppState>) {
    this.user = afAuth.authState;
    this.user.subscribe((user: any) => {
      if (user && user.uid) {
        this.store.dispatch(new LoginSuccessAction(user.uid));
      }
    });
  }

  login({email, password}: {email: string, password: string}) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
