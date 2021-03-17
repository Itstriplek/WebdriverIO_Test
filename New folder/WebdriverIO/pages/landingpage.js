class LandingPage{

    get fullname(){
        return $("(//div[@class='header_user_info'])[1]")
    }
    get homeButton(){

        return $("//a[@title='Home']");
    }


    customerFullName(){
       let finalname = this.fullname.getText();
        let customerName = ('firstname').concat('','lastanme');
        let answer = finalname.localeCompare(customerName);
        
        if(answer == 0){
            console.log('names match');
        }

        this.homeButton.click();
    }
    
}
module.exports = new LandingPage();
