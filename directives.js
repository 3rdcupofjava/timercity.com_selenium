/**
 * Created by kinghenry on 12/24/14.
 */

var By = require('selenium-webdriver').By
    require('chai').should()
    require('webdriverjs-helper');
    until =  require('selenium-webdriver').until,
    chrome = require('selenium-webdriver/chrome');

var service = new chrome.ServiceBuilder(__dirname + '/chromedriver').build();
var capabilities = {browserName:'chrome',
                    platform:"MAC"}

exports.driver = new chrome.createDriver(capabilities,service);


exports.setUp = function(){
    this.driver.get("http://timercity.com");
}

exports.addTimer = function(type) {
    if (type=="clock"){
        this.driver.findElement(By.xpath("//div[@id='timer_types']/label[1]")).click();
        this.driver.findElement(By.xpath("//input[@id='title']")).sendKeys('test alarm');
        this.driver.findElement(By.xpath("//button[@id='add']")).click();
    }
    else if (type=="alarm"){
        this.driver.findElement(By.xpath("//div[@id='timer_types']/label[2]")).click();
        this.driver.findElement(By.xpath("//input[@id='title']")).sendKeys('test alarm');
        this.driver.findElement(By.xpath("//input[@id='alarm_time']")).sendKeys('3:00\n');
        this.driver.findElement(By.xpath("//button[@id='add']")).click();
    }
    else if (type=="countdown"){
        this.driver.findElement(By.xpath("//div[@id='timer_types']/label[3]")).click();
        this.driver.findElement(By.xpath("//input[@id='title']")).sendKeys('test alarm');
        this.driver.findElement(By.xpath("//input[@id='countdown_time']")).sendKeys('00:00:10\n');
        this.driver.findElement(By.xpath("//button[@id='add']")).click();
    }
    else if(type=="stopwatch"){
        this.driver.findElement(By.xpath("//div[@id='timer_types']/label[4]")).click();
        this.driver.findElement(By.xpath("//input[@id='title']")).sendKeys('test alarm');
        this.driver.findElement(By.xpath("//button[@id='add']")).click();
    }
    else if (type=="lap timer"){
        this.driver.findElement(By.xpath("//div[@id='timer_types']/label[5]")).click();
        this.driver.findElement(By.xpath("//input[@id='title']")).sendKeys('test alarm');
        this.driver.findElement(By.xpath("//button[@id='add']")).click();
    }

}

exports.worldTab = function() {
    this.driver.findElement(By.xpath("//a[@href='#worldClockTab']")).click();
}

exports.homeTab = function() {
    this.driver.findElement(By.xpath("//a[@href='#home']")).click();
}

exports.alarmTab = function(){
    this.driver.findElement(By.xpath("//a[@href='#alarmClockTab']")).click();
}

exports.countDownTab = function() {
    this.driver.findElement(By.xpath("//a[@href='#countDownTab']")).click();
}

exports.stopWatchTab = function() {
    this.driver.findElement(By.xpath("//a[@href='#stopWatchTab']")).click();
}

exports.lapTimeTab = function() {
    this.driver.findElement(By.xpath("//a[@href='#lapTimeTab']")).click();
}

exports.saveBtn = function() {
    this.driver.findElement(By.xpath("//a[@href='/albums']")).click();
}

exports.aboutBtn = function() {
    this.driver.findElement(By.xpath("//a[@href='/about']")).click();
}

exports.saveRightBtn = function(){
    this.driver.findElement(By.xpath("//a[@id='save']")).click();
}

exports.loadBtn = function() {
    this.driver.findElement(By.xpath("//a[@id='load']")).click();
}

exports.loginBtn = function() {
    this.driver.findElement(By.xpath("//a[text()='Log In']")).click();
}

exports.loadInput = function(inputString){
    this.driver.findElement(By.xpath("//input[@id='storage_key_load']")).sendKeys(inputString);
    this.driver.sleep(2000);
}

exports.localBtn = function(){
    this.driver.findElement(By.xpath("//button[@id='load_local']")).click();
}

exports.globalBtn = function(){
    this.driver.findElement(By.xpath("//button[@id='load_global']")).click();
}

exports.brandLink = function(){
    this.driver.findElement(By.xpath("//a[@href='/']")).click();
}

exports.removeTimer = function() {
    this.driver.findElement(By.xpath("//div[@id='timer1']/button[@class='close']")).click();

}

