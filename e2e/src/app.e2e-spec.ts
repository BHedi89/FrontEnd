import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Szeretnél\núj embereket\nmegismerni?');
  });

  it('should modify an event', async () =>{
    const testEvent = 'Some test event title';
    page.navigateTo();
    const events = await page.getEventTitle();
    events[0] = testEvent;
    (await page.getEditButton()).click();
    page.getModalTitleInput().click();
    page.getModalTitleInput().sendKeys(testEvent);
    page.getModalSaveButton().click();
    const newEvent = await page.getEventTitle();
    expect(events).toEqual(newEvent);

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
