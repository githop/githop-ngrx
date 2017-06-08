import { ResumeStore } from './resume';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {BlogStore} from './blog';
/**
 * Created by githop on 5/22/17.
 */

export interface AppState {
  user: Observable<firebase.User>;
  resume: ResumeStore;
  blog: BlogStore;
}

