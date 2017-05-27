import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gth-landing',
  template: `
    <section class="gth-splash gth-border">
      <h1>Welcome</h1>

      <div class="gth-splash__body">
        <p>My name is Tom Hopkins. I live and work in Boulder, CO.</p>

        <img class="gth-profile gth-border" src="/assets/githopProf.JPG"/>

        <p>I enjoy learning new things, coding, and all of the outdoor fun that Colorado has to offer.</p>
      </div>
    </section>
  `,
  styles: []
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
