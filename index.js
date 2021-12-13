"use strict";
const prompt = require("prompt-sync")();
const accountInfo = require("./account");
const {pinNumber} = require("./account");
const {validatePin} = require("./atm");
const {getBalance} = require("./atm");
const {withdraw} = require("./atm");
const {deposit} = require("./atm");

let take;
let putBack;
let actions = "withdraw";
let actions2 = "deposit";
let actions3 = "exit";

let userInput = prompt("Do you want to withdraw, deposit, or exit?" + " ");
if(userInput !== actions){
    actions = prompt("Error...please choose an option" + " ");
}

if(userInput == "withdraw"){
    take = prompt("How much would you like to withdraw today?" + " ")
    console.log("Withdrawing..." + " " + "New account balance:");
    console.log(accountInfo.balance - take);  
    console.log("Thank you for using Ibrahim Bank." + " " + "Please remove card." + " " + "Have a great day!");
    }
//let userInput2 = prompt("Do you want to withdraw, deposit, or exit?" + " ");
while(userInput != actions2){
    actions2 = prompt("Error...please choose an option" + " ");
}
if(userInput == "deposit"){
    putBack = prompt("How much would you like to deposit today?" + " ");
    console.log("Depositing..." + " " + "New account balance:");
    console.log(accountInfo.balance + putBack);
    console.log("Thank you for using Ibrahim Bank." + " " + "Please remove card." + " " + "Have a great day!");
    }

//let userInput = prompt("Do you want to withdraw, deposit, or exit?" + " ");
    while(userInput !== actions3){
        actions3 = prompt("Error...please choose an option" + " ");

if(userInput == "exit"){
    (console.log("Thank you for using Ibrahim Bank." + " " + "Please remove card." + " " + "Have a great day!"));
}
    }
// }
// }

// withdraw()
//if(userInput == "withdraw"){
    // take = prompt("How much would you like to withdraw today?" + " ")
    // console.log("Withdrawing..." + " " + "New account balance:");
    // console.log(accountInfo.balance - take);  
    // console.log("Thank you for using Ibrahim Bank." + " " + "Please remove card." + " " + "Have a great day!");
    // }

// //}
//     withdraw();

//let putBack;
// deposit()
// if(userInput == "deposit"){
//     putBack = prompt("How much would you like to deposit today?" + " ");
//     console.log("Depositing..." + " " + "New account balance:");
//     console.log(accountInfo.balance + putBack);
//     console.log("Thank you for using Ibrahim Bank." + " " + "Please remove card." + " " + "Have a great day!");
//     }

// deposit();

// if(userInput == "exit"){
//     (console.log("Thank you for using Ibrahim Bank." + " " + "Please remove card." + " " + "Have a great day!"));
// }



// console.log(pinNumber);
// console.log(validatePin);
// console.log(getBalance)
// console.log(withdraw);
// console.log(deposit);