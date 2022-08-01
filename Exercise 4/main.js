
//1
const PrintUserValue = () => {
    const getUser = prompt("in text")

    for (let i = 0; i <= 10; i++) {

        console.log(getUser + '\n');
    }

}
//2
const PrintNumber = () => {
    const getNumber = Number(prompt("in number"))
    for (let i = 0; i < getNumber; i++) {
        console.log('Hello' + '\n');
    }
}

//3
const GradePointAverage = () => {
    let average = 0;
    const AmountOfTests = Number(prompt(" amount of tests"));
    for (let i = 0; i < AmountOfTests; i++) {
        const testScore = Number(prompt("Enter the grade of the selected test"))
        average += testScore;
    }
    console.log(average / AmountOfTests);
}

//4
const assembly = () => {
    let AssemblyWord = ' ';
    AssemblyWord = prompt('Write text to select');
    for (; AssemblyWord != 'stop';) {
        AssemblyWord = prompt('Write text to select');
        console.log(AssemblyWord);
    }

}

//5
const BiggestNumberAll = () => {

    let AddNumber = Number(prompt("Enter a number "));
    let numberCounter = AddNumber;

    for (; AddNumber != -1;) {

        AddNumber = Number(prompt("Enter a number "));

        if (AddNumber > numberCounter) {

            numberCounter = AddNumber;
        }
    }
    console.log(numberCounter);
}

//BiggestNumberAll()

//assembly();
//GradePointAverage();
//PrintNumber();
//PrintUserValue();     
