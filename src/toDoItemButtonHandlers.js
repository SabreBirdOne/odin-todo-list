import { getToDoItemByID } from "./allProjects";
import { updateToDoItemCard } from "./toDoItemCardUpdaters";

function toggleCompleteStatusHandler(event){
    // this function is picking up the incorrect event?!?
    console.log(event.target.parentNode);
    console.log(event.target.parentNode.dataset.itemID);
    console.log(getToDoItemByID(event.target.parentNode.dataset.itemID));

    let toDoItemCard = event.target.parentNode;
    const toDoItemID = event.target.parentNode.dataset.itemID;
    let toDoItem = getToDoItemByID(toDoItemID);
    
    toDoItem.isComplete = !toDoItem.isComplete;
    updateToDoItemCard(toDoItem, toDoItemCard);
}   

function populateDetailsDiv(toDoItem, detailsDiv){
    console.log(toDoItem);
}

function viewDetailsHandler(event){
    let viewDetailsButton = event.target;
    let toDoItemCard = event.target.parentNode;
    console.log(toDoItemCard);
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



export {
    toggleCompleteStatusHandler,
    viewDetailsHandler
}