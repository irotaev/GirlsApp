import { GirlsAppWebClientPage } from './app.po';

describe('girls-app-web-client App', () => {
  let page: GirlsAppWebClientPage;

  beforeEach(() => {
    page = new GirlsAppWebClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
