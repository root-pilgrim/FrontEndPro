const {Builder, By, Key, bel, until} = require('selenium-webdriver');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async function myFunction() {
    
    let driver = await new Builder().forBrowser('chrome').build();
    driver.get('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
    await driver.findElement(By.xpath('//*[@id="textareawrapper"]/div/div[6]/div[1]/div/div/div/div[5]/pre[7]/span/span[5]')).click();
    await driver.actions().keyDown(Key.INSERT).sendKeys('=\"https://www.bing.com\"     ').perform();
    await driver.findElement(By.xpath('//*[@id="runbtn"]')).click();
   // await driver.switchTo().frame(driver.findElement(By.xpath('//*[@id="iframeResult"]')));; 
   // await sleep(2000);
   // await driver.switchTo().frame(driver.findElement(By.xpath('/html/body/iframe')));
   //await sleep(2000);    driver.findElement(By.id('iframeResult'))
   // await driver.findElement(By.xpath('//*[@id="sb_form"]')).sendKeys('=\"https://www.bing.co ');
   
  
   let foo = await driver.wait(until.ableToSwitchToFrame(By.xpath('//*[@id="iframeResult"]')), 30000, 'Timed out after 30 seconds', 5000);
   console.log(foo + '===================++++++++');
   sleep(3000);
   driver.switchTo().defaultContent();
   let frm = await driver.findElement(By.xpath('//*[@id="iframeResult"]'));
   await driver.switchTo().frame(frm);
   let foo1 = await driver.wait(until.ableToSwitchToFrame(By.xpath('/html/body/iframe')), 30000, 'Timed out after 30 seconds', 5000);
   console.log(foo1 + '===================++++++++');
   sleep(3000);
   driver.switchTo().defaultContent();
   let frm1 = await driver.findElement(By.xpath('/html/body/iframe'));
   await driver.switchTo().frame(frm1);
   let frm11 = await driver.findElement(By.xpath('/html'));
   console.log(frm11 + '===================++++++++');

   await driver.findElement(By.xpath('//*[@id="sb_form_q"]')).sendKeys('=\"https://www.bing.co ');


})();
  
