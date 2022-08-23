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
 let dontAsck=[]
let taskList = [];


//בודק את ערך השדה 
function requiredText(inputtx) {
    if (inputtx.length === 0) {
        alert("No entry entered Please enter a new entry");
        return false;
    }
    return true;
}
//שדה הוספה למערך 
todoAdd.addEventListener("click", function (e) {
    
    console.log(e)
    if (!requiredText(inputText1.value)) {
        return
    }
    else if(e){

    }
    const nweToDo = {
        title: inputText1.value, isCompleted: false, id: Date.now(),
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
            task.isCompleted = true
            dontAsck.push(task);
            //taskList.splice(task);
            taskDiv.remove();

            console.log(task.isCompleted)

        })

        buttonContainer.append(DeleteButton, TaskDoneButton)
        taskDiv.append(taskTitle, buttonContainer)

        listTasks.appendChild(taskDiv)

    })
    document.querySelector("input").value = ''
    console.log(taskList);
})

doneButton.addEventListener('click', function (e) {
    console.log(taskList)
    listTasks.innerHTML = ''

    dontAsck.forEach((task) => {
        
      
        const DeleteButton = document.createElement('button');
        const taskDiv = document.createElement("div")
        const taskTitle = document.createElement("span")
        const buttonContainer = document.createElement("div")


        taskDiv.classList.add("task-container");


        taskTitle.innerText = task.title;
        DeleteButton.innerText = 'DELETE'



        // ביצוע מחיקה מהרשימה
        DeleteButton.addEventListener('click', function (e) {
            taskDiv.remove();
            taskList.splice(task);
            console.log(taskList);

        })
        buttonContainer.append(DeleteButton)
        taskDiv.append(taskTitle, buttonContainer)

        listTasks.appendChild(taskDiv)
    })
})

