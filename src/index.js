import ToDoItem from "./toDoItem.js";
import checkListManager from "./checkListManager.js"

import {createToDoItemCard, createProjectCard} from "./cardFactories.js"
import {updateToDoItemCard} from "./cardUpdaters.js"

import Project from "./project.js";

let toDoItem_1 = new ToDoItem();
let toDoItem_2 = new ToDoItem("Eat more sushi", "Sushi is very expensive", undefined, 2);
let toDoItem_3 = new ToDoItem("Goal in life", "Find the whereabouts of Abyssal Dision", undefined, 3);

checkListManager.addCheckListItem(toDoItem_3, "Join UPEO");
checkListManager.addCheckListItem(toDoItem_3, "Have human empathy")
checkListManager.addCheckListItem(toDoItem_3, "Contact General Resource");

checkListManager.toggleCheckListItem(toDoItem_3, "Join UPEO");
checkListManager.removeCheckListItem(toDoItem_3, "Have human empathy");

let projectNemo = new Project("Nemo", "Default project", [
    toDoItem_1, toDoItem_2, toDoItem_3
]);

console.log(projectNemo);

const projectNemoCard = createProjectCard(projectNemo.id);
for (const toDoItem of projectNemo.toDoItems){
    const newCard =  createToDoItemCard(toDoItem.id);
    updateToDoItemCard(toDoItem, newCard);

    projectNemoCard.append(newCard);
}

document.querySelector("body").appendChild(projectNemoCard);