exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['speclogin.js'],
    multiCapabilities: [{
        'browserName': 'internet explorer',
          'ignoreProtectedModeSettings': true
      }],
    onPrepare : async () => {
        
        browser.manage().timeouts().implicitlyWait(15000);
            
        
        await browser.waitForAngularEnabled(false);
    }

    
}