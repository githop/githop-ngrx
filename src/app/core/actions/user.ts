import {Action} from '@ngrx/store';
/**
 * Created by githop on 5/28/17.
 */

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export class LoginAction implements Action {
  readonly type = LOGIN;
  constructor(public payload: {email: string, password: string}) {}
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFailAction implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: any) {}
}

export type LoginActions = LoginAction
| LoginSuccessAction
| LoginFailAction;
