import { browser, by, element } from 'protractor';
import {protractor} from 'protractor/built/ptor';

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
    var E = protractor.ExpectedConditions;
    browser.wait(E.alertIsPresent(), 5000 , 'Alert not displayed');
    browser.switchTo().alert().accept();
  }
  rejectAlert() {
    var E = protractor.ExpectedConditions;
    browser.wait(E.alertIsPresent(), 5000 , 'Alert not displayed');
    browser.switchTo().alert().dismiss();
  }
  checkInputBox() {
    element(by.id('newTodo')).getText();
  }
}
