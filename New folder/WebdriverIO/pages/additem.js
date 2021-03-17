class AddItem{

get itemBlouse(){
    // return $("(//img[@title='Blouse'])[1]");
    return $("(//a[@title='Add to cart'])[2]");

}

get pagePrice(){
    return $("(//span[@class='price product-price'])[3]");
}

get cartButton(){
    $("//button[@name='Submit']");
}

get checkOut(){
    return $("//a[@title='Proceed to checkout']");
}

get summaryPrice(){
    return $("//td[@id='total_product']");
}






addingItem()
{
    // this.itemBlouse.scrollIntoView();
    let initalPrice =  this.pagePrice.getText();
    this.itemBlouse.click();
}

// addToCart(){
//     this.cartButton.click();

// }

clickCheckout()
{
    this.checkOut.click();
}

priceCompare(){


       
        let finalPrice =   this.summaryPrice.getText();

        // console.log(initalPrice.isEqual(finalPrice) );
       
        const checkoutButton = $("(//a[@title='Proceed to checkout'])[2]");
        checkoutButton.scrollIntoView();
        checkoutButton.waitForDisplayed();
        checkoutButton.click();
    
}


}
module.exports = new AddItem();