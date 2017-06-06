import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gth-footer',
  template: `
    <footer class="gth-footer gth-border">
      <h3>Built with love by <a href="https://github.com/githop/githop-ngrx" target="_blank" rel="noreferrer noopener">githop</a></h3>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
