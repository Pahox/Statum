import { StatumPage } from './app.po';

describe('statum App', function() {
  let page: StatumPage;

  beforeEach(() => {
    page = new StatumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
