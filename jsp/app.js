// selectors
console.log("Hello")

const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");

// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// function
function addTodo(event){
    event.preventDefault();
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todoItem");

    todoDiv.appendChild(newTodo);

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class = "fas fa-check"></i>';
    completeButton.classList.add("completeBtn");
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trashBtn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "trashBtn"){
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === "completeBtn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
}

