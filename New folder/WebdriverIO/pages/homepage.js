class HomePage{

    get signin(){
        return $("//a[contains(text(),'Sign in')]");
    }
    get email(){
        return $("//input[@id='email_create']");
    }
    get submit(){
        return $("#SubmitCreate");
    }

    clickOnSignin()
    {
        this.signin.waitForDisplayed();
        this.signin.click();
    }
    enterEmailId(text){
        this.email.waitForDisplayed();
        this.email.setValue(text);
    }

    clickOnSubmit(){
        this.submit.waitForDisplayed();
        this.submit.click();
    }

}
module.exports = new HomePage();