/**
 * Created by kinghenry on 12/30/14.
 */

var clocks = require('./addRmClocks.js');

var By = require('selenium-webdriver').By,
    until =  require('selenium-webdriver').until,
    chrome = require('selenium-webdriver/chrome');


var lapTwice = function() {
    clocks.addTimer("lap timer")
    clocks.driver.sleep(3000);
    clocks.driver.findElement(By.xpath("//button[text()=' Start']")).click();
    clocks.driver.sleep(3000);
    clocks.driver.findElement(By.xpath("//button[text()=' Lap']")).click();
    clocks.driver.sleep(3000);
    clocks.driver.findElement(By.xpath("//button[text()=' Lap']")).click();
    clocks.driver.sleep(2000);
    clocks.driver.findElement(By.xpath("//button[text()=' Stop']")).click();
    clocks.driver.sleep(2000);

}

var tabClocks = function() {
    clocks.setUp()
    clocks.alarmTab();
    clocks.driver.sleep(3000);
    clocks.addTimer("alarm");
    clocks.driver.sleep(3000);
    clocks.countDownTab();
    clocks.driver.sleep(3000);
    clocks.addTimer("countdown");
    clocks.driver.sleep(3000);
    clocks.lapTimeTab();
    clocks.driver.sleep(3000);
    lapTwice();
    clocks.alarmTab();
    clocks.driver.sleep(3000);
    clocks.countDownTab();
    clocks.driver.sleep(3000);
    clocks.lapTimeTab()
    clocks.driver.sleep(5000);
    clocks.driver.close();
}

tabClocks()
