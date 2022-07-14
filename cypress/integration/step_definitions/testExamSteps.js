import { TestExamPo } from "../page_object/testExam.po";
const testPageObject = new TestExamPo();
import {Given, Then} from "cypress-cucumber-preprocessor/steps"

Given(/^I open '(.*)' page$/, (page) => {
    cy.visit(page, {failOnStatusCode: false});
});

Then(/^I check that price is displayed for product with the '(.*)' tag for Saturn site$/, (tag) =>  {
    testPageObject.checkPriceVisibilityForSaturn(tag);
});

Then(/^I check that price is displayed for product with the '(.*)' tag for Douglas site$/, (tag) =>  {
    testPageObject.checkPriceVisibilityForDouglas(tag);
});

Then(/^Get the temperature at '(.*)'$/, (location) =>  {
    testPageObject.checkTemperature(location);
});