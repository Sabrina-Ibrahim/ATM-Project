"use strict";
//The account.js file should contain a pin and balance variable. 
//The pin on the account should be validated before the user can move into the ATM menu on the index.js file. 
//Try creating a prompt that would allow the user to input the correct pin, if not retry. If yes, move to the atm.js file. 

let pinNumber = "0721";
let balance = 150000000; 
module.exports = {
    balance, 
    pinNumber
}