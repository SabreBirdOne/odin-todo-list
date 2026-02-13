import ToDoItem from "./toDoItem.js";
import ToDoItemCard from "./toDoItemCard.js"
import Project from "./project.js";

let toDoItem_1 = new ToDoItem();

let toDoItem_2 = new ToDoItem(
    "Eat more sushi", 
    "Sushi is very expensive", 
    undefined, 
    2
);

let toDoItem_3 = new ToDoItem(
    undefined, 
    "Find the whereabouts of Abyssal Dision",
    undefined,
    3
)

let projectNemo = new Project("Nemo test run 1", [
    toDoItem_1, toDoItem_2, toDoItem_3
]);

console.log(projectNemo);

let toDoItemCard_1 = new ToDoItemCard(toDoItem_1.id);
let body = document.querySelector("body");
body.appendChild(toDoItemCard_1.div);

console.log(toDoItemCard_1);
toDoItemCard_1.updateCard(toDoItem_2);