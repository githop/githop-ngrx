import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FIREBASE} from '../../environments/firebase';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ResumeService} from './services';



@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE)
  ],
  declarations: [],
  providers: [ResumeService]
})
export class CoreModule { }
