/**
 * Created by kinghenry on 12/24/14.
 */

var By = require('selenium-webdriver').By,
    until =  require('selenium-webdriver').until,
    chrome = require('selenium-webdriver/chrome');

var service = new chrome.ServiceBuilder(__dirname + '/chromedriver').build();
var capabilities = {browserName:'chrome',
                    platform:"MAC"}

var driver = new chrome.createDriver(capabilities,service);


var setUp = function(){
    driver.get("http://timercity.com");
}

var addAlarm = function() {
    driver.findElement(By.xpath("//div[@id='timer_types']/label[2]")).click();
    driver.findElement(By.xpath("//input[@id='title']")).sendKeys('test alarm');
    driver.findElement(By.xpath("//input[@id='alarm_time']")).sendKeys('3:00\n');
    driver.findElement(By.xpath("//button[@id='add']")).click();
}

var addClock = function() {
    driver.findElement(By.xpath("//div[@id='timer_types']/label[1]")).click();
    driver.findElement(By.xpath("//input[@id='title']")).sendKeys('test alarm');
    driver.findElement(By.xpath("//button[@id='add']")).click();
}

var addCountDown = function() {
    driver.findElement(By.xpath("//div[@id='timer_types']/label[3]")).click();
    driver.findElement(By.xpath("//input[@id='countdown_time']")).sendKeys('00:00:10\n');
    driver.findElement(By.xpath("//button[@id='add']")).click();

}

var addStopWatch = function() {
    driver.findElement(By.xpath("//div[@id='timer_types']/label[4]")).click();
    driver.findElement(By.xpath("//input[@id='title']")).sendKeys('test alarm');
    driver.findElement(By.xpath("//button[@id='add']")).click();
}

var addLapTimer = function() {
    driver.findElement(By.xpath("//div[@id='timer_types']/label[5]")).click();
    driver.findElement(By.xpath("//input[@id='title']")).sendKeys('test alarm');
    driver.findElement(By.xpath("//button[@id='add']")).click();
}
var removeClock = function() {
    driver.findElement(By.xpath("//div[@id='timer1']/button[@class='close']")).click();

}

setUp()
addLapTimer()
removeClock()