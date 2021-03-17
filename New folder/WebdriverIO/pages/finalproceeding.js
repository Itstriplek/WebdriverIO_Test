class FinalProceeding{

    get shippingCheckout(){

    return $("(//button[@class='button btn btn-default standard-checkout button-medium'])");
}

get agree(){
return $("//input[@id='cgv']");

}

get checkoutBtn(){
    return $("(//a[@title='Proceed to checkout'])");
}

addCheck(){

    this.checkoutBtn.click();
}

agreeCheck(){

    this.agree.click();
}

shipCheck(){
    this.shippingCheckout.click();
}

}
module.exports = new FinalProceeding();