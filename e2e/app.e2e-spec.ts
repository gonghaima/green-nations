import { GreenNationsPage } from './app.po';

describe('green-nations App', () => {
  let page: GreenNationsPage;

  beforeEach(() => {
    page = new GreenNationsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
