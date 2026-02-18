import { getToDoItemByID } from "./allProjects";
import { updateToDoItemCard } from "./toDoItemCardUpdaters";

function toggleCompleteStatusHandler(event){
    let toDoItemCard = event.target.parentNode;
    const toDoItemID = event.target.parentNode.dataset.itemID;
    let toDoItem = getToDoItemByID(toDoItemID);
    
    toDoItem.isComplete = !toDoItem.isComplete;
    updateToDoItemCard(toDoItem, toDoItemCard);
}   

function populateDetailsDiv(toDoItem, detailsDiv){
    // description, notes, checklist
    let descriptionHeader   = document.createElement("h5");
    let description         = document.createElement("p");
    let notesHeader         = document.createElement("h5");
    let notes               = document.createElement("p");
    let checklistHeader     = document.createElement("h5");
    let checklist           = document.createElement("ol");

    descriptionHeader.textContent   = "Description";
    description.textContent         = toDoItem.description;
    notesHeader.textContent         = "Notes";
    notes.textContent               = toDoItem.notes;
    checklistHeader.textContent     = "Checklist";

    // Build checklist

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