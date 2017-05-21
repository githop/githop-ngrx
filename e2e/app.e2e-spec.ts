import { GithopNgrxPage } from './app.po';

describe('githop-ngrx App', () => {
  let page: GithopNgrxPage;

  beforeEach(() => {
    page = new GithopNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gth works!');
  });
});
