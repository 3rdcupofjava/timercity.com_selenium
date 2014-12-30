/**
 * Created by kinghenry on 12/30/14.
 */

var clocks = require('./addRmClocks.js');

var By = require('selenium-webdriver').By,
    until =  require('selenium-webdriver').until,
    chrome = require('selenium-webdriver/chrome');


var lapTwice = function() {
    clocks.setUp()
    clocks.addTimer("lap timer")
    clocks.driver.sleep(3000);
    clocks.driver.findElement(By.xpath("//button[@onclick='startLapTimerOnClick(timer1);']")).click();
    clocks.driver.sleep(3000);
    clocks.driver.findElement(By.xpath("//button[@onclick='splitTimerOnClick(timer1);']")).click();
    clocks.driver.sleep(3000);
    clocks.driver.findElement(By.xpath("//button[@onclick='splitTimerOnClick(timer1);']")).click();
    clocks.driver.sleep(2000);
    clocks.driver.findElement(By.xpath("//button[@onclick='stopLapTimerOnClick(timer1);']")).click();
    clocks.driver.sleep(2000);
    clocks.removeTimer();
    clocks.driver.close();
}

lapTwice()
