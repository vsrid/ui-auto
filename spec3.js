const { browser } = require("protractor");

describe('title check', function() {
    it('should have title', function() {
       
    
       browser.get('http://juliemr.github.io/protractor-demo/');
       expect(browser.getTitle()).toEqual('Super Calculator');
       browser.driver.sleep(3000);
       element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();
       browser.driver.sleep(3000);
    });


});