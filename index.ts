#! /usr/bin/env node

import inquirer from "inquirer";

//1) Computer will generate a random number
//2) User input for guessing number
//3) Compare user input with computer generate number and show result - done

let random_number = Math.floor(Math.random()* 6 + 1);
   //console.log(random_number);
let guess_num = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1-10:"
    },
]);
    if (guess_num.userguessednumber === random_number){
        console.log("Congratulations! you guessed right number.")
    }else {
            console.log("You guessed wrong number.")
    }
    
    



    
    
    
   











