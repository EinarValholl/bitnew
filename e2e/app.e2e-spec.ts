import { BitnewPage } from './app.po';

describe('bitnew App', function() {
  let page: BitnewPage;

  beforeEach(() => {
    page = new BitnewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
