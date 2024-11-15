const todoList = [
  {
    name: "faire la vaisselle",
    duedate: "2024-01-01",
  },
  {
    name: "faire une formation ",
    duedate: "2024-01-01",
  },
];

displayTodoList();

function displayTodoList() {
  let todoListHTML = "";

  for (var i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    // Destructuring assignment to destructure the properties of the object into variables.
    const {name, duedate} = todoObject;

    const html = `
            <div>${name}</div>
            <div>${duedate}</div>
            <button onclick="
            todoList.splice(${i}, 1);
            DisplayTodoList();
            "class="delete-todo-button">Delete</button>
            `;
    todoListHTML += html;

    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  }
}

function AddTodo() {
  const inputElement = document.querySelector(".js-name-input");

  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");

  const duedate = dateInputElement.value;

  inputElement.value = "";
  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    duedate,
  });

  inputElement.value = "";

  displayTodoList();
}
