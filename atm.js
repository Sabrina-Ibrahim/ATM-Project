"use strict"; 

const prompt = require("prompt-sync")();
const accountInfo = require("./account");

let userPin = prompt("What is your pin number?" + " ");
function validatePin(pin){
while(accountInfo.pinNumber != pin){
    pin = prompt("Incorrect pin number, try again.");   
}
}
validatePin(userPin);

function getBalance(){
    console.log("Current checking account balance:" + " " + accountInfo.balance);
}
getBalance();

let take = prompt("How much would you like to withdraw today?" + " ");
function withdraw(){
    console.log("Withdrawing..." + " " + "New account balance:");
    console.log(accountInfo.balance - take);  
}
withdraw();


let putBack = prompt("How much would you like to deposit today?" + " ");
function deposit(){
    console.log("Depositing..." + " " + "New account balance:");
    console.log(accountInfo.balance + putBack);
}
deposit();

