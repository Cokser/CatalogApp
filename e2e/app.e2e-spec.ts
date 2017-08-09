import { FrontDevAppPage } from './app.po';

describe('front-dev-app App', () => {
  let page: FrontDevAppPage;

  beforeEach(() => {
    page = new FrontDevAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
