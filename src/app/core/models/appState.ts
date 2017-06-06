import { ResumeStore } from './resume';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
/**
 * Created by githop on 5/22/17.
 */

export interface AppState {
  user: Observable<firebase.User>;
  resume: ResumeStore;
}

