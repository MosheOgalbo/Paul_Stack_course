
const tabContainer = document.createElement("div");
const ViewApiButton = document.createElement("button");
ViewApiButton.innerText = 'Fetch api '
const div1 = document.createElement("div");


const getApiAnswer = async (div1) => {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()

        console.log(data.results)

        data.results.forEach((item) => {

            const div = document.createElement("div");
            const span1 = document.createElement("span");
            const span2 = document.createElement("span");


            span1.innerText = item.cell;
            span2.innerText = item.email;

            div.append(span1, span2);
            div1.appendChild(div);
        });

    } catch (e) {
        console.log(e);
    }

};

ViewApiButton.addEventListener('click', (e) => {
    div1.innerHTML = " "

    getApiAnswer(div1);
    div1.innerHTML = "api1"
    document.body.append(div1)
})


// 1

const getApiAnswerTodos = async (ResultField) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        //console.log(data)
        data.forEach((item) => {
            //console.log(item)
            if (item.completed === true) {
                const div = document.createElement("div");
                const ul = document.createElement('ul')
                const span1 = document.createElement("li");
                const span2 = document.createElement("li");
                const div2 = document.createElement('q')

                console.log(item)

                span1.innerText = item.id;
                span2.innerText = item.title;

                div.append(span1, span2);
                div.appendChild(ul)
                ResultField.appendChild(div);
            }

        })
    }

    catch (e) {
        console.log(e)

    }

}

const tabContainer2 = document.createElement("div");
const viewApiButton2 = document.createElement("button");
viewApiButton2.innerText = 'Fetch api Task 2'
const divgetApiAnswerTodos = document.createElement("div");

viewApiButton2.addEventListener('click', (e) => {
    divgetApiAnswerTodos.innerHTML = " "


    getApiAnswerTodos(divgetApiAnswerTodos)
    divgetApiAnswerTodos.innerHTML = "api1"
    document.body.append(divgetApiAnswerTodos)
})

ViewApiButton.append(tabContainer)
document.body.appendChild(ViewApiButton)
viewApiButton2.append(tabContainer2)
document.body.appendChild(viewApiButton2)

//תרגיל 2
const UserList = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users')
        const data = await response.json()
        //console.log(data);
        document.body.innerHTML= " "
        data.data.forEach((item) => {
            //console.log(item);
            
            const div = document.createElement("div");
            const span1 = document.createElement("span");
            const span2 = document.createElement("span");
            const span3 =document.createElement('samp')
            const itemImg= document.createElement('img')

            span1.innerText = item.last_name;
            span3.innerText=item.first_name;
            span2.innerText = item.email;
            itemImg.src = item.avatar;
            
            div.append(span1,span3,span2,itemImg);
            document.body.appendChild(div);

        })
    }
    catch (error) {
        console.log(error)
    }
}

UserList();