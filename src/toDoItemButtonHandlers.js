import { getToDoItemByID } from "./allProjects";
import { updateToDoItemCard } from "./toDoItemCardUpdaters";

function toggleCompleteStatusHandler(event){
    let toDoItemCard = event.target.parentNode;
    const toDoItemID = toDoItemCard.dataset.itemID;
    let toDoItem = getToDoItemByID(toDoItemID);
    
    toDoItem.isComplete = !toDoItem.isComplete;
    console.log(toDoItem);
    updateToDoItemCard(toDoItem, toDoItemCard);

}   

export {toggleCompleteStatusHandler}