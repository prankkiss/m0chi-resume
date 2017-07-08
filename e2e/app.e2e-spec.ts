import { M0chiResumePage } from './app.po';

describe('m0chi-resume App', () => {
  let page: M0chiResumePage;

  beforeEach(() => {
    page = new M0chiResumePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
