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

function createToDoItemEditDialog(toDoItem){
    let returnDialog = document.createElement("dialog");
    let returnDialogForm = document.createElement("form");

    returnDialog.classList.add("toDoItemDialog");
    
    for (const [stringField, details] of Object.entries({
        "title": ["Title:", "text"],
        "description": ["Description:", "text"],
        "dueDate": ["Due Date:", "datetime-local"],
        "priority": ["Priority:", "number"],
        "notes": ["Notes:", "text"],
    })){
        let label = document.createElement("label");
        label.htmlFor = stringField;
        label.textContent = details[0];
        
        let input = document.createElement("input");
        input.type = details[1];
        input.id = stringField;
        input.placeholder = toDoItem[stringField];

        returnDialogForm.appendChild(label);
        returnDialogForm.appendChild(input);
    }

    // The div for submit or cancel buttons
    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttonsDiv");

    let cancelButton = document.createElement("button");
    cancelButton.classList.add("cancelButton");
    cancelButton.formMethod = "dialog";
    cancelButton.textContent = "Cancel";
    cancelButton.value = "cancel";

    let saveButton = document.createElement("button");
    saveButton.classList.add("saveButton");
    saveButton.id = "saveButton";
    saveButton.textContent = "Save Changes";
    saveButton.value = "save";

    saveButton.addEventListener("click", (event) => {
        event.preventDefault();
        returnDialog.close("save");
    });

    returnDialog.addEventListener("close", (event) => {
        if (returnDialog.returnValue === "save"){
            // Assign form values to the toDoItem and actually edit it here
            console.log(toDoItem);

            // update the toDoItemCard too after editting toDoItem
        }
    });

    buttonsDiv.appendChild(cancelButton);
    buttonsDiv.appendChild(saveButton);
    returnDialogForm.appendChild(buttonsDiv);
    returnDialog.appendChild(returnDialogForm);

    return returnDialog;
}

export {
    populateDetailsDiv, createToDoItemEditDialog
}