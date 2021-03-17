class RegistrationPage{

        get gender(){
            return $('#id_gender1');
        }
        get firstname(){
             return $("//input[@id='customer_firstname']");
        }
        get lastname(){
            return $("//input[@id='customer_lastname']");
        }
        get password(){
            return $("//input[@id='passwd']");
        }
        get day(){
            return $("//select[@id='days']");
        }
        get month(){
           return $("//select[@id='months']");
        }
        get year(){
            return $("//select[@id='years']");
        }


        get address(){
            return $('#address1');
        }
        get zipcode(){
            return $('#postcode');
        }
        get city(){
            return $('#city');
        }
        get country(){
            return $('#id_country');
        }
        get state(){
           return $('#id_state');
        }
        get mobile(){
            return $('#phone_mobile');
        }

        get alias(){
            return $('#alias')
        }

        get registeraccount(){
            return $('#submitAccount');
        }



        firstnameField(text){
            
        }

        lastNameField(text){
            
        }

        nameFields()
        {
            this.firstname.setValue('firstname');
            this.lastname.setValue('lastname');
        }

        passwordValue(text){
            this.password.setValue(text);
        }

        // dateOfBirth(){
        //     this.day.selectByVisibleText('12');
        //     this.month.selectByVisibleText('May');
        //     this.year.selectByVisibleText('2003');
        // }

        addressdetails()
        {
            this.address.setValue('no 8, broadway');
            this.city.setValue('Miami');
            this.state.selectByVisibleText('Florida');
            this.zipcode.setValue('80091');
            this.mobile.setValue('8907987654');
            this.alias.setValue('My Address');
            this.registeraccount.click();



        }


}
module.exports = new RegistrationPage();