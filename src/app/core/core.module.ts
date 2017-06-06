import { NgModule } from '@angular/core';
import {FIREBASE} from '../../environments/firebase';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ResumeService} from './services';
import {EffectsModule} from '@ngrx/effects';
import {ResumeEffects} from './effects/resume';
import {StoreModule} from '@ngrx/store';
import { reducer } from './reducers/index';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { UserEffects } from './effects/user';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE),
    EffectsModule.run(ResumeEffects),
    EffectsModule.run(UserEffects),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    ResumeService,
    UserService
  ]
})
export class CoreModule { }
