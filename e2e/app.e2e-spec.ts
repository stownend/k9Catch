import { K9CatchWebPage } from './app.po';

describe('k9-catch-web App', () => {
  let page: K9CatchWebPage;

  beforeEach(() => {
    page = new K9CatchWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
