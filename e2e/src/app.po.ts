import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.tagName('h1')).getText();
  }

  async getLogo(): Promise<boolean> {
    return element(by.id('logo')).isDisplayed();
  }

  async getCityCards(): Promise<number> {
    return (await element.all(by.className('city'))).length;
  }

  async clickToSeeTheChart(): Promise<boolean> {
    await element(by.tagName('button')).click();
    return element(by.id('timeline-chart')).isDisplayed();
  }

  async getWeatherIcons(): Promise<number> {
    return (await element.all(by.className('weather-icon'))).length;
  }
}
