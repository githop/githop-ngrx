import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/models/appState';
import {LoginAction} from '../../core/actions/user';

@Component({
  selector: 'gth-login',
  template: `
    <div class="gth-login">
      <div>
        
        <input #email type="text"/>
        
        <input #pw type="password"/>
         
        <button (click)="doLogin(email.value, pw.value)" >Sign in</button>

        <a routerLink="/resume/editor">resume editor</a>
        
      </div>
    </div>
  `,
  styles: [`    
    .gth-login {
      display: flex;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  doLogin(email: string, password: string) {
    if (email && password) {
      this.store.dispatch(new LoginAction({email, password}));
    }
  }

}
