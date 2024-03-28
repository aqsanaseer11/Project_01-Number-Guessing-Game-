#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber)
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 6 :"
    }]);
console.log("Wellcome to number guessing game");
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation! you guessed right number");
}
else {
    console.log("Sorry! you guessed wrong number");
}
