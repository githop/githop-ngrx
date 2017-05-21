import { browser, by, element } from 'protractor';

export class GithopNgrxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gth-root h1')).getText();
  }
}
