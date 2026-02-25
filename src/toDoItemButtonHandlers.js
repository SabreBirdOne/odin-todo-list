import allProjectsLookup from "./allProjectsLookup.js";
import toDoItemManager from "./toDoItemManager.js";
import projectManager from "./projectManager.js";
import { updateToDoItemCard } from "./toDoItemCardUpdaters";
import { updateProjectCard } from "./projectCardUpdaters.js";
import { populateDetailsDiv } from "./toDoItemCardComponentFactories";

function toggleCompleteStatusHandler(event){
    let toDoItemCard = event.target.parentNode;
    const toDoItemID = event.target.parentNode.dataset.itemID;
    let toDoItem = allProjectsLookup.getToDoItemByID(toDoItemID);
    
    toDoItemManager.toggleCompletionStatus(toDoItem);
    updateToDoItemCard(toDoItem, toDoItemCard);
}   

function viewDetailsHandler(event){
    let viewDetailsButton = event.target;
    let toDoItemCard = event.target.parentNode;
    let detailsDiv = toDoItemCard.querySelector(".details");

    if (viewDetailsButton.textContent === "View details"){
        // User wants to view details
        viewDetailsButton.textContent = "Close details";
        let toDoItem = allProjectsLookup.getToDoItemByID(toDoItemCard.dataset.itemID);
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
    let toDoItemCardToRemove = event.target.parentNode;
    let toDoItemToRemove = allProjectsLookup.getToDoItemByID(
        toDoItemCardToRemove.dataset.itemID
    );
    let targetProject = allProjectsLookup.getProjectByToDoItemID(
        toDoItemCardToRemove.dataset.itemID
    );

    projectManager.removeToDoFromProject(targetProject, toDoItemToRemove);

    let targetProjectCard = toDoItemCardToRemove.parentNode.parentNode
    updateProjectCard(targetProject, targetProjectCard);
}

export {
    toggleCompleteStatusHandler,
    viewDetailsHandler,
    removeToDoItemHandler
}