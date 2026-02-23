import { getToDoItemByID } from "./allProjects";
import checkListManager from "./checkListManager";
import { updateToDoItemCard } from "./toDoItemCardUpdaters";

function toggleChecklistItemHandler(event){
    let checklistLine = event.target.parentNode;
    let toDoItemCard = checklistLine.parentNode.parentNode.parentNode;
    let toDoItem = getToDoItemByID(toDoItemCard.dataset.itemID);

    let itemName = checklistLine.querySelector("p.checklistItemLabel").textContent;
    let isItemCompletedText = checklistLine.querySelector("p.isItemCompletedText");

    checkListManager.toggleCheckListItem(toDoItem, itemName);
    isItemCompletedText.textContent = toDoItem.checklist[itemName] ? "Done" : "Not done";
}


function createCheckListLine(checklistItem, isItemCompleted){
    let checklistLine = document.createElement("li");
        
    let checklistItemLabel = document.createElement("p");
    let isItemCompletedText = document.createElement("p");
    
    checklistItemLabel.classList.add("checklistItemLabel");
    isItemCompletedText.classList.add("isItemCompletedText");
    
    checklistItemLabel.textContent = checklistItem;
    isItemCompletedText.textContent = isItemCompleted ? "Done" : "Not done";

    // buttons
    let toggleCompletedButton = document.createElement("button");
    toggleCompletedButton.textContent = "Toggle Completion Status";
    toggleCompletedButton.addEventListener("click", toggleChecklistItemHandler);

    for (const element of [
        checklistItemLabel,
        isItemCompletedText,
        toggleCompletedButton
    ]){
        checklistLine.appendChild(element)
    }
    return checklistLine;
}

function addToCheckListHandler (event){
    let toDoItemCard = event.target.parentNode.parentNode;
    let toDoItem = getToDoItemByID(toDoItemCard.dataset.itemID);

    const newChecklistItemName = "Checklist Item " + (Object.keys(toDoItem.checklist).length + 1);
    
    checkListManager.addCheckListItem(toDoItem, newChecklistItemName);
    console.log(toDoItem.checklist);

    let checklistElement = toDoItemCard.querySelector("ul");
    const checklistLine = createCheckListLine(
        newChecklistItemName, 
        toDoItem.checklist[newChecklistItemName]
    );
    checklistElement.appendChild(checklistLine);
}

function populateChecklistElement(toDoItem, targetDiv){
    for (let [checklistItem, isItemCompleted] of Object.entries(toDoItem.checklist)){
        const checklistLine = createCheckListLine(checklistItem, isItemCompleted);
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

    description.classList.add("description");
    notes.classList.add("notes");

    descriptionHeader.textContent   = "Description";
    description.textContent         = toDoItem.description;
    notesHeader.textContent         = "Notes";
    notes.textContent               = toDoItem.notes;
    checklistHeader.textContent     = "Checklist";

    let addToChecklistButton = document.createElement("button");
    addToChecklistButton.textContent = "Add";
    addToChecklistButton.addEventListener("click", addToCheckListHandler);

    // Build checklist
    populateChecklistElement(toDoItem, checklist);

    for (const element of [
        descriptionHeader,
        description,
        notesHeader,
        notes,
        checklistHeader,
        addToChecklistButton,
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
        input.value = toDoItem[stringField];

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
            const toDoItemArgs = returnDialog.querySelectorAll("input");
            const elementsToUpdate = {
                "title": toDoItemArgs[0].value,
                "description": toDoItemArgs[1].value,
                "dueDate": toDoItemArgs[2].value,
                "priority": toDoItemArgs[3].valueAsNumber,
                "notes": toDoItemArgs[4].value
            }

            for(const key of Object.keys(elementsToUpdate)){
                if(elementsToUpdate[key] && Object.hasOwn(toDoItem, key)){
                    toDoItem[key] = elementsToUpdate[key];
                }
            }

            // update the toDoItemCard too after editting toDoItem
            let toDoItemCard = document.querySelector(
                `div.toDoItemCard[data-item-i-d = "${toDoItem.id}"]`
            );
            updateToDoItemCard(toDoItem, toDoItemCard);
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