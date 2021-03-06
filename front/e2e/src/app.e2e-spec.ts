import { tick } from "@angular/core/testing";
import { browser, protractor } from "protractor";
import { AppPage } from "./app.po";

describe("Testes Totvs Wallet", () => {
  let page: AppPage;
  

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo();                   
  });
  
  it("então o saldo deve ser igual a 300 totvscoins", async() => {
   
    const EC = protractor.ExpectedConditions;
    browser.wait(
        EC.visibilityOf(page.getBalance().first()), 20000, "Custom Error Message"
    );
          
      browser.waitForAngularEnabled(false);
      expect (await page.getBalance().first().getText()).toEqual("300 totvscoins");
    });

  it("então clico no botao de resgate", () => {
    browser.waitForAngularEnabled(false);
    expect(page.getResgate().click());
  });

  it("então clico no botao de resgate e clico no botao de confirmar", () => {
    
    const EC = protractor.ExpectedConditions;
    browser.wait(
        EC.visibilityOf(page.getBalance().first()), 20000, "Custom Error Message"
    );

    browser.waitForAngularEnabled(false);
  //  browser.wait(EC.elementToBeClickable(page.getResgate()), 5000);
    page.getResgate().click();

    browser.wait(EC.elementToBeClickable(page.getConfirmacao()), 5000);
  
    expect(page.getConfirmacao().click());
  });

  it("então o nome do app deve ser igual a Wallet", () => {
    // browser.waitForAngularEnabled(false);
    expect(page.getAppName().first().getText()).toEqual("Wallet");
  });
});
