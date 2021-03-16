let value;

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const cardbody = document.getElementsByClassName("card-body")[1];
const newLink = document.createElement("a");

newLink.id = "clear-todos";
newLink.className = "btn btn-warning"
newLink.href = "#";
newLink.appendChild(document.createTextNode("Dinamik Element Ekledim"));

const oldElement = document.querySelector("#tasks-title");

cardbody.replaceChild(newLink,oldElement);

// cardbody.appendChild(newLink);

// console.log(cardbody);

// const todoList = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");

// console.log(todoList);
// console.log(todos);

// // remove method

// todos[2].remove();

// //removechild
//  todoList.removeChild(todoList.lastElementChild);
//  todoList.removeChild(todos[1]);