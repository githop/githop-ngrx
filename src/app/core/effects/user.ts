/**
 * Created by githop on 5/28/17.
 */

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as LoginActions from '../actions/user';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class UserEffects {

  @Effect({dispatch: false})
  signIn$ = this.actions$
    .ofType(LoginActions.LOGIN)
    .map((action: any) => action.payload)
    .switchMap((payload: any) => this.userService.login(payload));

  constructor(
    private actions$: Actions,
    private userService: UserService) {}
}
