const { browser } = require("protractor");
//global variables
describe('mutlile elements', function(){
    var firstnumber = element(by.model('first'));
    var secondnumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));
    //beforeEach--will be executed before every it block
    //launch the url
    
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });
   //tc1
    it('shld have a title',function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    //tc2
it('should add one and two', function(){
    
    firstnumber.sendKeys(1);
    secondnumber.sendKeys(2);
    goButton.click();
    expect(result.getText()).toEqual('3');
});
    //tc3
    it('should copy value from input',function(){
firstnumber.sendKeys('5');
        expect(firstnumber.getAttribute('value')).toEqual('5');

    



});



});