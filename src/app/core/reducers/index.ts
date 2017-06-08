
import {cardFilter, resumeReducer} from './resume';
import {Action, ActionReducer, combineReducers} from '@ngrx/store';
import {AppState} from '../models/appState';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../../../environments/environment';
import {userReducer} from './user';
import {blogReducer} from './blog';
const reducers = { resume: resumeReducer, cardFilter, user: userReducer, blog: blogReducer };

const devReducers: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const prodReducers: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: AppState, action: Action) {
  return environment.production ? prodReducers(state, action) : devReducers(state, action);
}
