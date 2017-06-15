import { Ang2QuotesPage } from './app.po';

describe('ang2-quotes App', () => {
  let page: Ang2QuotesPage;

  beforeEach(() => {
    page = new Ang2QuotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
