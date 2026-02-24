import checkListManager from "./checkListManager";
import { getToDoItemByID } from "./allProjects";

function toggleChecklistItemHandler(event){
    let checklistLine = event.target.parentNode;
    let toDoItemCard = checklistLine.parentNode.parentNode.parentNode;
    let toDoItem = getToDoItemByID(toDoItemCard.dataset.itemID);

    let itemName = checklistLine.querySelector("p.checklistItemLabel").textContent;
    let isItemCompletedText = checklistLine.querySelector("p.isItemCompletedText");

    checkListManager.toggleCheckListItem(toDoItem, itemName);
    isItemCompletedText.textContent = toDoItem.checklist[itemName] ? "Done" : "Not done";
}

function removeChecklistItemHandler(event){
    let checklistLine = event.target.parentNode;
    let toDoItemCard = checklistLine.parentNode.parentNode.parentNode;
    let toDoItem = getToDoItemByID(toDoItemCard.dataset.itemID);

    const itemToRemove = checklistLine.querySelector("p.checklistItemLabel").textContent;
    checkListManager.removeCheckListItem(toDoItem, itemToRemove);
    // And remove the item from the DOM
    checklistLine.parentNode.removeChild(checklistLine);
}

export {
    toggleChecklistItemHandler,
    removeChecklistItemHandler
}