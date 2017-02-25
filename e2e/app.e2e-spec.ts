import { ContactsPaulMEdwardsPage } from './app.po';

describe('contacts-paul-m-edwards App', () => {
  let page: ContactsPaulMEdwardsPage;

  beforeEach(() => {
    page = new ContactsPaulMEdwardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
