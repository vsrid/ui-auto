const { element, browser } = require("protractor");

describe('enter naem feature', function()
{
     it('shld enter name as tom', function()
     {

        browser.get('https://angularjs.org/');
         element(by.model('yourName')).sendKeys('tom');
        var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
      expect(text.getText()).toEqual('Hello tom!');
      });


});

describe('title check', function() {
it('should have title', function() {

   browser.get('http://juliemr.github.io/protractor-demo/');
   expect(browser.getTitle()).toEqual('Super Calculator');
   browser.driver.sleep(3000);
   element(by.model('first')).sendKeys('4');
   browser.driver.sleep(3000);

});


});