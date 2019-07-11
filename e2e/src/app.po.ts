import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPoints() {
    return element(by.cssContainingText('div', 'Points')).$('span').getText();
  }

  getPlus1Button() {
    return element(by.cssContainingText('button', 'Plus 1'));
  }

  getResetButton() {
    return element(by.cssContainingText('button', 'Reset'));
  }
}
