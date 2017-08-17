import { PaycuisineAngPage } from './app.po';

describe('paycuisine-ang App', () => {
  let page: PaycuisineAngPage;

  beforeEach(() => {
    page = new PaycuisineAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
