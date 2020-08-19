

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['speclogin.js'],
    
    onPrepare: async () => {
        
        browser.manage().timeouts().implicitlyWait(15000);
            
        
        await browser.waitForAngularEnabled(false);
    }

    
}