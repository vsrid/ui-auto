const { browser } = require("protractor");
const { Workbook } = require("exceljs");
let login = require('./authenciate/login')
let auth = require('./authenciate/url.json')

describe('check credentials and patient', function () {

    var originalTimeout;

    beforeEach(async function () {
        
        browser.ignoreSynchronization = true;
        await browser.waitForAngularEnabled(false);

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        
        browser.get(auth.loginurl); 

        //browser.get('https://web501.qa.drfirst.com/login');

        

        let url = ''

       // var wb = new Workbook();

       // await wb.xlsx.readFile("./vignesh.xlsx").then(function () {

           // let sheet = wb.getWorksheet("Sheet1");

           // let rowObject = sheet.getRow(2);

           // url = rowObject.getCell(6).value;
       // });

       console.log(url);

        //await browser.get(url);
    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


    fit('Correct username,correct password', async function () {
        browser.waitForAngularEnabled(false);

        let userName = ''
        let passWord = ''
        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(2);



            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });

        //await browser.get(url);
        await browser.driver.sleep(2000);
        //element(by.model('formData.username')).sendKeys(userName);


        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        //loginpage.enterpass1(passWord);
login.enterpassword1(passWord);




       
login.clickGo();
browser.driver.sleep(8000);
 
        var check = element(by.name('add-patient')); 
        expect(check.getText()).toEqual('Add Patient');

    });

    it('Incorrect username correct password', async function () {


        let userName = ''
        let passWord = ''
        var wb = new Workbook();
        


        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(3);



            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });

        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);

        // element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);

        login.clickGo();

        
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        browser.driver.sleep(4000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/login');
       

    });

    it('Correct username,invalid password', async function () {



        let passWord = ''
        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(4);



            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;


        await browser.driver.sleep(2000);
        //element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);

        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(4000);
        var elName = element(by.binding('msg.msg'));
        expect(elName.getText()).toBe('The username and password did not match our records. Please try again.');




    });

    it('Incorrect username,Incorrect password ', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(5);



            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;
        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        var elName = element(by.binding('msg.msg'));
        expect(elName.getText()).toBe('The username and password did not match our records. Please try again.');


    });
    it('Correct username Blank Password ', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(6);



            userName = rowObject.getCell(4).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        
       // await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
       login.clickGo();
       await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/login');


    });
    it('Blank username Correct password ', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(7);



            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/login');


    });
    it('UPPER case(username),Correct password ', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(8);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/login');


    });
    it('LOWER case(password),Correct username ', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(9);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
       // await element(by.model('formData.username')).sendKeys(userName);
       login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/login');


    });
    it('case-sensitive: mixed', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(10);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/login');


    });
    it('Provider Administrator', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(12);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/patient-search');


    });
    it('Provider ', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(13);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/patient-search');


    });

it('Clinical Staff Provider Agent', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(14);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/patient-search');


    });

    it('clinical staff', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(15);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/patient-search');


    });
    it('student staff', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(16);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/patient-search');


    });
    it('Non-Clinical Staff', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(17);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/patient-search');


    });
    it('front desk staff', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(18);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/patient-search');


    });
    it('front desk emergency staff', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(19);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/patient-search');


    });


    it('front desk emergency staff', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(19);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/patient-search');


    });

    it('clinical staff admin', async function () {



        let userName = ''
        let passWord = ''

        var wb = new Workbook();

        await wb.xlsx.readFile("./loginscenario.xlsx").then(function () {

            let sheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject = sheet.getRow(20);


            userName = rowObject.getCell(4).value;
            passWord = rowObject.getCell(5).value;

        });
        browser.ignoreSynchronization = true;

        await browser.driver.sleep(2000);
        //await element(by.model('formData.username')).sendKeys(userName);
        login.enterusername1(userName);
        //element(by.model('formData.password')).sendKeys(passWord);
        login.enterpassword1(passWord);
        //await browser.findElement(by.xpath('//*[@id="login.state"]/div/div/df-w-login/div[1]/div[2]/div[2]/div[1]/div/form/div[3]/button')).click();
        login.clickGo();
        await browser.driver.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://web501.qa.drfirst.com/patient-search');


    });



});


