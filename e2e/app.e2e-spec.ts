import { GandalfMemberUiPage } from './app.po';

describe('gandalf-member-ui App', function() {
  let page: GandalfMemberUiPage;

  beforeEach(() => {
    page = new GandalfMemberUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
