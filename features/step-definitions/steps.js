const { Given, When, Then} = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/HomePage.page');
//const { expect } = require('chai');
//const { expect } = require('chai');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Given("User navigates to Amucad HomePage", async()=>{
    await HomePage.openAmucad();
    await HomePage.CloseBannerAndAgreeOnCookiesMessage();
});

When("User logs in with no correct credentials", async()=>{
    await HomePage.ClickonThreeDotsButton();
    await HomePage.clickonMenuLoginButton();
    await HomePage.EnterUserandPassandClickLogin();
});

Then("an error message should be displayed", async()=>{
    await expect(HomePage.InvalidLoginMessage).toBeDisplayed();
});

When("User clicks on Map from the banner", async()=>{
    await HomePage.ClickonMapLink();
});

When("User navigates to Register Page", async()=>{
    //await HomePage.ClickonThreeDotsButton();
    //await HomePage.clickonMenuLoginButton();
    await HomePage.ClickonRegisterButtonononHomePage();
})