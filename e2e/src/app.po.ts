import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('#first-title')).getText() as Promise<string>;
  }

  async getEventTitle(){
    const details = element.all(by.css('.card:first-child h3'));
    return await details.map(det => det.getText());
  }

  getEditButton(){
    return element(by.css('.card .btn-warning'));
  }

  getModalTitleInput() {
    return element(by.css('.modal-body [name="title"]'));
  }

  getModalSaveButton() {
    return element(by.css('.mosal-body [type="submit"]'));
  }
}
