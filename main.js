const inputDOB = document.querySelector("#dob");
const inputNumber = document.querySelector("#lucky-number");
const btnCheck = document.querySelector("#btn");
const outputText = document.querySelector(".output-text");

btnCheck.addEventListener("click", clickEventhandler);

function clickEventhandler() {
    let dob = inputDOB.value;
    let numberToCheck = Number(inputNumber.value);
    if (dob && numberToCheck) {
        const sum = sumDOB(dob);
        checkIfLucky(sum, numberToCheck);
    } else {
        outputText.innerText = "Please enter the Both fields"
    }
}

function sumDOB(dob) {
    const Udob = dob.replaceAll("-", "");
    let sum = 0;
    for (i = 0; i < Udob.length; i++) {
        sum = sum + Number(Udob.charAt(i));
    }
    return sum;
}

function checkIfLucky(sum, numberToCheck) {
    if (sum % numberToCheck === 0) {
        outputText.innerText = "Your Birthday is lucky!!"
    } else {
        outputText.innerText = "Your Birthday is not Lucky."
    }
}