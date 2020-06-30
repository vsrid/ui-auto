const { browser } = require("protractor");
const { DriverProvider } = require("protractor/built/driverProviders");

describe('check credentials', function() {
    it('login to account', function() {
    
       browser.get('https://web501.qa.drfirst.com/login');
       browser.driver.sleep(2000);
      element(by.model('formData.username')).sendKeys("nlau27");
      element(by.model('formData.password')).sendKeys("Demo2345");
      browser.driver.sleep(2000);
    browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
      browser.driver.sleep(8000);
          
    });


});