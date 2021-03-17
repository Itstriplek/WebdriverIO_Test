const homepage = require("../pages/homepage");
const registrationpage = require("../pages/registrationpage");
const landingpage = require("../pages/landingpage");
const additem = require("../pages/additem");
const finalproceeding = require("../pages/finalproceeding")

describe("interaction with web element", function(){

    it("Click on signin",function(){
        browser.url('/');
        browser.pause(10000);
        browser.maximizeWindow();
        homepage.clickOnSignin();
        
    });

    it("Add email",function(){
        homepage.enterEmailId('testmail21@test.com');

    });

    it("click create account",function(){

        browser.saveScreenshot('../WebdriverIO_Practice/screenshot/screenshot.png');
        homepage.clickOnSubmit();
        browser.pause(5000);
    })

    it("enter personnel information", function(){

        const radiobtn = $("//input[@id='id_gender1']");
        radiobtn.click();
        browser.pause(5000);
        registrationpage.nameFields();
        registrationpage.passwordValue('test@1234')

        // registrationpage.dateOfBirth();
        browser.saveScreenshot('../WebdriverIO_Practice/screenshot/screenshot1.png');
        
        });

    it("adding address details", function(){

        registrationpage.addressdetails();
        browser.pause(5000);
        browser.saveScreenshot('../WebdriverIO_Practice/screenshot/screenshot2.png');
        
    });   

    it("checking customer name", function(){

        landingpage.customerFullName();
        browser.pause(5000);
        browser.saveScreenshot('../WebdriverIO_Practice/screenshot/screenshot3.png');

    });

    it("adding item to the cart", function(){

        browser.pause(5000);
        additem.addingItem();
        
        additem.clickCheckout()
        browser.saveScreenshot('../WebdriverIO_Practice/screenshot/screenshot4.png');
        browser.pause(2000);
        additem.priceCompare();
        browser.pause(2000);
        
        
    })

    it("proceeding to address page", function(){

        additem.clickCheckout();
        browser.saveScreenshot('../WebdriverIO_Practice/screenshot/screenshot5.png');
    })


    it("Proceeding to shipping details", function(){

        finalproceeding.addCheck();
    })

    it("Proceeding to payment details", function(){

        finalproceeding.agreeCheck();
        finalproceeding.shipCheck();
        browser.saveScreenshot('../WebdriverIO_Practice/screenshot/screenshot6.png');
    })


});
