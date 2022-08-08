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
const listTasks = document.querySelector(".listTasks");
const doneButton = document.querySelector(".doneButton");

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
    if (!requiredText(inputText1.value)) {
        return
    }
    const nweToDo = {
        title: inputText1.value, isCompleted: false, id: Date.now(),
        isdelet: false
    }
    taskList.push(nweToDo);
    listTasks.innerHTML = ''
    taskList.forEach((task) => {
        const DeleteButton = document.createElement('button');
        const TaskDoneButton = document.createElement('button');
        const taskDiv = document.createElement("div")
        const taskTitle = document.createElement("span")
        const buttonContainer = document.createElement("div")

        taskDiv.classList.add("task-container")

        taskTitle.innerText = task.title
        DeleteButton.innerText = 'DELETE'
        TaskDoneButton.innerText = 'DONE'

        // ביצוע מחיקה מהרשימה
        DeleteButton.addEventListener('click', function (e) {
            taskDiv.remove();
            taskList.splice(task);
            console.log(taskList);

        })

        //כפתור בוצע
        TaskDoneButton.addEventListener('click', function (e) {
            console.log(e)


        })

        buttonContainer.append(DeleteButton, TaskDoneButton)
        taskDiv.append(taskTitle, buttonContainer)

        listTasks.appendChild(taskDiv)

    })
    document.querySelector("input").value = ''
    console.log(taskList);
    listTasks.style.overflow = "scroll";
})

doneButton.addEventListener('click', function (e) {
    console.log(e)
})

