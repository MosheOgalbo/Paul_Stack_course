//1
const PrintDetails = () => {
    const myName = prompt('what is your name')
    const myLastName = prompt('what is your Last Name')
    return myName + " " + myLastName
}
//2
const IggestNumberOfAll = (num1, num2, num3) => {
    let BigNumber = num1
    if (num1 < num2) {
        BigNumber = num2;
    }
    if (num2 < num3) {
        BigNumber = num3
    }
    return BigNumber;
}
//3
const ValueOfTheNumbers = (number) => {

    if (number > 0) {
        return "This number is positive\n" + number;
    }
    else if (number == 0) {
        return "This number is equal to 0 \n" + number;
    }
    else {
        return number + "\nThis number is negative "
    }

}

//4
const AgeCheck = (AgeNumber) => {
    if (AgeNumber > 18) {
        return true;
    }
    else {
        return false;
    }
}

const LoginDetails = () => {
    let EntryApprovalStatus;
    const myName = prompt('what is your name')
    const myLastName = prompt('what is your Last Name')
    const AgeNumber = prompt('What is your age')
    if(AgeCheck(AgeNumber)){
        EntryApprovalStatus ="You can enter";
    }else{
        EntryApprovalStatus="You cannot enter";
    }
    return myName+"\n"+myLastName+"\n"+EntryApprovalStatus
}


//5
const EvenOrOddNumber=(NumberCheck)=>{
    if(NumberCheck%2 == 0){
        return "Even number"
    }else{
        return "an odd number"
    }
}



const TestNumberCheck = prompt('Please write a number')
console.log(EvenOrOddNumber(TestNumberCheck));

//console.log(LoginDetails());
// console.log(ValueOfTheNumbers(0));
// console.log(ValueOfTheNumbers(-0));
// console.log(ValueOfTheNumbers(-1));
// console.log(ValueOfTheNumbers(2));