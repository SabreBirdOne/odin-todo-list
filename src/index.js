import ToDoItem from "./toDoItem.js";
import { format } from "date-fns";

let toDoItem_1 = new ToDoItem(
    "Item 1", 
    "Be awesome", 
    Date.now(), 
    1
)

console.log(toDoItem_1);
console.log(format(toDoItem_1.dueDate, "yyyy-MM-dd"));
