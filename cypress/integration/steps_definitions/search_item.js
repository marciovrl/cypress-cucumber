import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("that it is on the homepage of Mercado Livre", () => {
  cy.visit("/");
});

When("I search for {string}", item => {
  cy.get("input[name=as_word]").type(item);
  cy.get('button[class="nav-search-btn"]').click();
});

Then("I view items according to my search", () => {
  cy.get('span[class="main-title"]').then(el => {
    expect(el.text()).to.contains("Golf");
  });
});
