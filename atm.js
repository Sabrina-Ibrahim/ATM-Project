"use strict";
//Declaring the function and giving it the name: getBalance. I'm passing the value through my paramater: checkingBalance. 
//I want to return the amount I have in my checking account.
const prompt = require("prompt-sync")();
const accountInfo = require("./account");
console.log(accountInfo);

// function getBalance(checkingBalance){
//     return (getBalance);
// }
// function withdraw(checkingWithdraw){
//     return (withdrawAmount);
// }
// function deposit(checkingDeposit){
//     return (depositAmount);
// }

let userPin = prompt("What is your pin number?" + " ");

function validatePin(pin){
while(accountInfo.pinNumber != pin){
    pin = prompt("Incorrect pin number, try again.");
}
console.log("This is your balance" + " " + accountInfo.balance);   
}
validatePin(userPin);

