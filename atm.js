"use strict"; 

const prompt = require("prompt-sync")();
const accountInfo = require("./account");

let userPin = prompt("What is your pin number?" + " ");
function validatePin(pin){
while(accountInfo.pinNumber != pin){
        pin = prompt("Incorrect pin number, try again." + " ");   
    }
}
validatePin(userPin);

function getBalance(){
    console.log("Current checking account balance:" + " " + accountInfo.balance);
}
getBalance();

let take;
let userInput = prompt("Do you want to withdraw, deposit, or exit?" + " ");
function withdraw(){
if(userInput == "withdraw"){
    take = prompt("How much would you like to withdraw today?" + " ")
    console.log("Withdrawing..." + " " + "New account balance:");
    console.log(accountInfo.balance - take);  
    console.log("Thank you for using Ibrahim Bank." + " " + "Please remove card." + " " + "Have a great day!");
    }
}
    withdraw();

let putBack;
function deposit(){
if(userInput == "deposit"){
    putBack = prompt("How much would you like to deposit today?" + " ");
    console.log("Depositing..." + " " + "New account balance:");
    console.log(accountInfo.balance + putBack);
    console.log("Thank you for using Ibrahim Bank." + " " + "Please remove card." + " " + "Have a great day!");
    }
}
deposit();

if(userInput == "exit"){
    (console.log("Thank you for using Ibrahim Bank." + " " + "Please remove card." + " " + "Have a great day!"));
}
   
 module.exports = {
  validatePin,
  getBalance,
  withdraw,
  deposit
}
//console.log(module.exports);
