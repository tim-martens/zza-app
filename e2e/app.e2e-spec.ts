import { ZzaAppPage } from './app.po';

describe('zza-app App', () => {
  let page: ZzaAppPage;

  beforeEach(() => {
    page = new ZzaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
