
const ChangeOfState = document.querySelector(".ChangeOfState");
const displayText = document.querySelector(".log");
const inputTest = document.querySelector("input");
const buttons = document.querySelectorAll("button")


ChangeOfState.addEventListener('click', function (e) {
    console.log(e);
    if (document.body.style.backgroundColor !== 'white') {
        document.body.style.backgroundColor = 'white';
        displayText.style.backgroundColor = 'blue'
        inputTest.style.color = "blue";
        buttons.forEach(button => {
            button.style.color = "blue"
        })
    }
    else {
        document.body.style.backgroundColor = 'black';
        displayText.style.backgroundColor = 'black'
        inputTest.style.color = "red";
        buttons.forEach(button => {
            button.style.color = "blue"
        })
    }
});

////2
const todoAdd = document.querySelector(".todoButton");
const inputText1 = document.querySelector("input");
const listTasks = document.querySelector(".listTasks")
const TaskListTemplate = document.createElement('table')

let taskList = [];

//שדה הוספה למערך 
function requiredText(inputtx) {
    if (inputtx.length === 0) {
        alert("No entry entered Please enter a new entry");
        return false;
    }
    return true;
}

todoAdd.addEventListener("click", function () {
    requiredText(inputText1.value)
    taskList.push(inputText1.value);
    console.log(taskList);
    document.querySelector("input").value = '' 
    console.log(taskList);
})

taskList.forEach((item) => {
    TaskListTemplate.innerText = item;
    
})

listTasks.appendChild(TaskListTemplate);
