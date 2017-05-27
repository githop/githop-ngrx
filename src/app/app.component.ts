import { Component } from '@angular/core';

@Component({
  selector: 'gth-root',
  template: `
    <gth-nav></gth-nav>
    <router-outlet></router-outlet>
    <gth-footer></gth-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'gth works!';
}
