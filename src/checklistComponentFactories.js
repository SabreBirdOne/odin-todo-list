import {toggleChecklistItemHandler, removeChecklistItemHandler} from "./checklistButtonHandlers"
import checkListManager from "./checkListManager";
import { createDialogButtonDiv } from "./otherHTMLFactories.js";

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
    toggleCompletedButton.classList.add("editButton");

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", removeChecklistItemHandler);
    removeButton.classList.add("removeButton");

    for (const element of [
        checklistItemLabel,
        isItemCompletedText,
        toggleCompletedButton,
        removeButton
    ]){
        checklistLine.appendChild(element)
    }
    return checklistLine;
}

function createAddToChecklistDialog(toDoItem){
    let dialog = document.createElement("dialog");
    let dialogForm = document.createElement("form");

    let label = document.createElement("label");
    label.htmlFor = "newChecklistItemName";
    label.textContent = "New checklist item name"

    let input = document.createElement("input");
    input.type = "text"; 
    input.id = "newChecklistItemName";
    input.placeholder = "Checklist Item";

    dialogForm.appendChild(label);
    dialogForm.appendChild(input);

    let submitValue = "add";
    let buttonsDiv = createDialogButtonDiv(submitValue, undefined, "Add");
    let addButton = buttonsDiv.querySelector(".submitButton");
    addButton.classList.add("createButton");

    addButton.addEventListener("click", (event) => {
        event.preventDefault();
        dialog.close(submitValue);
    });

    dialog.addEventListener("close", (event) => {
        if (dialog.returnValue === submitValue){
            const inputValue = dialog.querySelector("input").value; 
            const newName = inputValue ? 
                inputValue : 
                "Checklist Item " + (Object.keys(toDoItem.checklist).length + 1)
            checkListManager.addCheckListItem(toDoItem, newName);

            let toDoItemCard = document.querySelector(
                `div.toDoItemCard[data-item-i-d = "${toDoItem.id}"]`
            );

            let checklistElement = toDoItemCard.querySelector("ul");
            const checklistLine = createCheckListLine(newName, toDoItem.checklist[newName]);
            checklistElement.appendChild(checklistLine);  
        }
    });

    for (const element of [label, input, buttonsDiv]){
        dialogForm.appendChild(element);
    }

    dialog.appendChild(dialogForm);
    return dialog;
}

export {
    createCheckListLine, createAddToChecklistDialog
}