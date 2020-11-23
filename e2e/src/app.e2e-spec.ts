import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Welcome to Weather Matters');
  });

  it('should display a logo', async () => {
    await page.navigateTo();
    expect(await page.getLogo()).toBeTruthy();
  });

  it('should have 5 city weather cards', async () => {
    await page.navigateTo();
    expect(await page.getCityCards()).toEqual(5);
  });

  it('should show the chart after click', async () => {
    await page.navigateTo();
    expect(await page.clickToSeeTheChart()).toBeTruthy();
  });

  it('should have 5 weather icons', async () => {
    await page.navigateTo();
    expect(await page.getWeatherIcons()).toBe(5);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
