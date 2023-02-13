const Page = require('./page');

class Homepage extends Page{

    get ThreedotsButton() { return $('//div[@class="vertical-dots-icon"]') }
    get MenuLoginButton() { return $('//div[text()="login"]') }
    get UsernameInputField() { return $('//input[@placeholder="E-Mail-Address"]') }
    get PasswordInputField() { return $('//input[@placeholder="Password"]') }
    get LoginButton() { return $('//div[text()="Login"]/parent::button') }
    get InvalidLoginMessage() { return $('//div[text()="Your login credentials are not correct."]') }
    get MapLinkonHomePage() { return $('//span[text()="Map"]/parent::div/parent::a') }
    get BetaMessageCloseButton() { return $('//div[@class="beta-information-content-wrapper"]/img[@class="close-button"]') }
    get RegisterButton() { return $('//span[text()="Register"]') }
    get CookiesagreeButtononHomePage() { return $('//a[text()="I agree"]') }

    async ClickonThreeDotsButton() {
        await (await this.ThreedotsButton).click();
    }

    async clickonMenuLoginButton(){
        await (await this.MenuLoginButton).click();
    }

    async EnterUserandPassandClickLogin(){
        await (await this.UsernameInputField).setValue("invalid@test.com");
        await (await this.PasswordInputField).setValue("InvalidP@ssword123!!");
        await (await this.LoginButton).click();
    }

    async ClickonMapLink(){
        await (await this.MapLinkonHomePage).click();
        browser.pause(5000);
    }

    async CloseBannerAndAgreeOnCookiesMessage(){
        await (await this.BetaMessageCloseButton).click();
        if(await (await this.CookiesagreeButtononHomePage).isDisplayed()){
            await (await this.CookiesagreeButtononHomePage).click();
        }
    }

    async ClickonRegisterButtonononHomePage(){
        await (await this.RegisterButton).click();
    }

    openAmucad(){
        return super.openAmucad('');
    }
}

module.exports = new Homepage();