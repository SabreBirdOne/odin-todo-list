import { getToDoItemByID } from "./allProjects";
import { updateToDoItemCard } from "./toDoItemCardUpdaters";
import { populateDetailsDiv } from "./toDoItemCardComponentFactories";

function toggleCompleteStatusHandler(event){
    let toDoItemCard = event.target.parentNode;
    const toDoItemID = event.target.parentNode.dataset.itemID;
    let toDoItem = getToDoItemByID(toDoItemID);
    
    toDoItem.isComplete = !toDoItem.isComplete;
    updateToDoItemCard(toDoItem, toDoItemCard);
}   

function viewDetailsHandler(event){
    let viewDetailsButton = event.target;
    let toDoItemCard = event.target.parentNode;
    let detailsDiv = toDoItemCard.querySelector(".details");

    if (viewDetailsButton.textContent === "View details"){
        // User wants to view details
        viewDetailsButton.textContent = "Close details";
        let toDoItem = getToDoItemByID(toDoItemCard.dataset.itemID);
        populateDetailsDiv(toDoItem, detailsDiv);

    }
    else { // User wants to close details
        viewDetailsButton.textContent = "View details";
        while(detailsDiv.firstChild){
            detailsDiv.removeChild(detailsDiv.firstChild);
        }
    }
}

function removeToDoItemHandler(event){
    console.log(event.target.parentNode);
}

export {
    toggleCompleteStatusHandler,
    viewDetailsHandler,
    removeToDoItemHandler
}