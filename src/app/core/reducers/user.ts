import {Action} from '@ngrx/store';
import * as UserActions from '../actions/user';
/**
 * Created by githop on 5/28/17.
 */

export function userReducer(state = {user: null}, action: Action) {
  switch (action.type) {
    case UserActions.LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
