import { Page } from "@playwright/test";

export abstract class PageHolder {
  constructor(protected page: Page) {}
}

export abstract class Component extends PageHolder {}

export abstract class AppPage extends Component {
  protected dropdownOptions = this.page.locator("div.select__option");
  protected optionWithText = (text: string) =>
    this.page.locator(`//*[contains(text(),"${text}")]`).first();
  protected dropdownSelectedValue = this.page.locator(".select__single-value span").first();
}
