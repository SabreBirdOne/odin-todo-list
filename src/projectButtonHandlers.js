import ToDoItem from "./toDoItem";
import { createToDoItemCard } from "./toDoItemCardFactories";
import { updateToDoItemCard } from "./toDoItemCardUpdaters";
import { getProjectByID } from "./allProjects";

function newBlankToDoItemHandler(event){
    // Creates the new ToDoItem
    let newToDoItem = new ToDoItem();

    // Add the new ToDoItem to the Project
    const targetProjectID = event.target.parentNode.dataset.itemID;
    let targetProject = getProjectByID(targetProjectID);
    targetProject.toDoItems.push(newToDoItem);

    console.log(targetProject.toDoItems);

    // Create the new ToDoItemCard
    let newToDoItemCard = createToDoItemCard(newToDoItem.id);
    updateToDoItemCard(newToDoItem, newToDoItemCard);

    // Add to the div.toDoItemCards
    let toDoItemCardsDiv = event.target.parentNode.querySelector(".toDoItemCards")
    toDoItemCardsDiv.appendChild(newToDoItemCard);
}

export {
    newBlankToDoItemHandler
}