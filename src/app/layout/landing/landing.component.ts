import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gth-landing',
  template: `
    <p>
      landing Works!
      check out my <a routerLink="resume">resume!</a>
    </p>
  `,
  styles: []
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
