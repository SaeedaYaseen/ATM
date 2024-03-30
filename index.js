#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 2583;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin == myPin) {
    console.log("Correct Pin Code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["Withdraw", "Balance Inquiry", "Fast cash"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdraw = await inquirer.prompt([
            {
                name: "withdrawer",
                type: "number",
                message: "Enter your amount",
            },
        ]);
        if (withdraw.withdrawer < myBalance) {
            myBalance -= withdraw.withdrawer;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient Amount");
        }
    }
    else if (operationAns.operation === "Balance Inquiry") {
        console.log("Your balance is " + myBalance);
    }
    else if (operationAns.operation === "Fast cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "cash",
                message: "How much amount you want to withdraw ",
                type: "list",
                choices: ["1000", "5000", "10000", "25000", "50000"],
            },
        ]);
        if (fastCash.cash === "1000") {
            myBalance -= fastCash.cash;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        if (fastCash.cash === "5000") {
            myBalance -= fastCash.cash;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        if (fastCash.cash === "10000") {
            myBalance -= fastCash.cash;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else if (fastCash.cash === "25000") {
            console.log("Insufficient Amount");
        }
        else if (fastCash.cash === "50000") {
            console.log("Insufficient Amount");
        }
    }
}
else {
    console.log("Invalid Pin");
}
