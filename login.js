const { browser } = require("protractor");

let login = function(){


        let user1_input = element(by.model('formData.username'));
        let pass1_input = element(by.model('formData.password'));
        let goButton = element(by.css('[a-id="submit"]'));

        this.get = function(url){
            browser.get(url);
        }
        
        this.enterusername1 = function (users) {
            user1_input.sendKeys(users);
        };
        
        this.enterpassword1 = function (passs) {
            pass1_input.sendKeys(passs);
        };

        
        this.clickGo = function () {
            goButton.click();
        };

    }


module.exports = new login();

//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button