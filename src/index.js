import ToDoItem from "./toDoItem.js";
import Project from "./project.js";
import { format } from "date-fns";

let toDoItem_1 = new ToDoItem();

console.log(toDoItem_1);
console.log(format(toDoItem_1.dueDate, "yyyy-MM-dd H:m:s"));

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