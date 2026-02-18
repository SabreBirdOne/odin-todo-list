import { getToDoItemByID } from "./allProjects";
import checkListManager from "./checkListManager";

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
    populateChecklistElement(toDoItem, checklist);

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

function createToDoItemDialog(toDoItem = undefined){
    let returnDiv = document.createElement("dialog");
    let returnDivForm = document.createElement("form");
    
    for (const stringField of [
        "title",
        "description",
        "notes"
    ]){
        let label = document.createElement("label");
        label.htmlFor = stringField;
        label.textContent = stringField.toUpperCase() + ":";
        
        let input = document.createElement("input");
        input.type = "text";
        input.id = stringField;
        if (toDoItem) input.placeholder = toDoItem[stringField];

        returnDivForm.appendChild(label);
        returnDivForm.appendChild(input);
    }

    returnDiv.appendChild(returnDivForm);
    return returnDiv;
}

export {
    populateDetailsDiv, createToDoItemDialog
}