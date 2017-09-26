import { browser, by, element } from 'protractor';

export class TodoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeadingText() {
    return element(by.css('app-root h1')).getText();
  }
  getCountText() {
    return element(by.id('count')).getText();
  }
  newTodo() {
    return  element(by.id('newTodo')).sendKeys('Random Text');
  }
  clickSubmit() {
    element(by.id('submit')).click();
  }
  clickCompleted() {
    element(by.xpath('//ul/li[2]/button')).click();
  }
  confirmAlert() {
    browser.switchTo().alert().accept();
  }
  rejectAlert() {
    browser.switchTo().alert().dismiss();
  }
  checkInputBox() {
    element(by.id('newTodo')).getText();
  }
}
