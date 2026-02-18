import { getToDoItemByID } from "./allProjects";
import { updateToDoItemCard } from "./toDoItemCardUpdaters";
import checkListManager from "./checkListManager";

function toggleCompleteStatusHandler(event){
    let toDoItemCard = event.target.parentNode;
    const toDoItemID = event.target.parentNode.dataset.itemID;
    let toDoItem = getToDoItemByID(toDoItemID);
    
    toDoItem.isComplete = !toDoItem.isComplete;
    updateToDoItemCard(toDoItem, toDoItemCard);
}   

function toggleChecklistItemHandler(event){
    let checklistLine = event.target.parentNode;
    let toDoItemCard = checklistLine.parentNode.parentNode.parentNode;
    let toDoItem = getToDoItemByID(toDoItemCard.dataset.itemID);

    let itemName = checklistLine.querySelector("p.checklistItemLabel").textContent;
    let isItemCompletedText = checklistLine.querySelector("p.isItemCompletedText");

    checkListManager.toggleCheckListItem(toDoItem, itemName);
    isItemCompletedText.textContent = toDoItem.checklist[itemName] ? "Done" : "Not done";
}

function populateChecklistElement(toDoItem, targetDiv){
    for (let [checklistItem, isItemCompleted] of Object.entries(toDoItem.checklist)){
        let checklistLine = document.createElement("li");
        
        let checklistItemLabel = document.createElement("p");
        let isItemCompletedText = document.createElement("p");
        
        checklistItemLabel.classList.add("checklistItemLabel");
        isItemCompletedText.classList.add("isItemCompletedText");
        
        checklistItemLabel.textContent = checklistItem;
        isItemCompletedText.textContent = isItemCompleted ? "Done" : "Not done";

        let toggleCompletedButton = document.createElement("button");
        toggleCompletedButton.textContent = "Toggle";
        toggleCompletedButton.addEventListener("click", toggleChecklistItemHandler);

        checklistLine.appendChild(checklistItemLabel);
        checklistLine.appendChild(isItemCompletedText);
        checklistLine.appendChild(toggleCompletedButton);
        targetDiv.appendChild(checklistLine);
    }
}

function populateDetailsDiv(toDoItem, detailsDiv){
    let descriptionHeader   = document.createElement("h5");
    let description         = document.createElement("p");
    let notesHeader         = document.createElement("h5");
    let notes               = document.createElement("p");
    let checklistHeader     = document.createElement("h5");
    let checklist           = document.createElement("ul");

    descriptionHeader.textContent   = "Description";
    description.textContent         = toDoItem.description;
    notesHeader.textContent         = "Notes";
    notes.textContent               = toDoItem.notes;
    checklistHeader.textContent     = "Checklist";

    // Build checklist
    populateChecklistElement(toDoItem, checklist)

    for (const element of [
        descriptionHeader,
        description,
        notesHeader,
        notes,
        checklistHeader,
        checklist
    ]){
        detailsDiv.appendChild(element);
    }

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



export {
    toggleCompleteStatusHandler,
    viewDetailsHandler
}