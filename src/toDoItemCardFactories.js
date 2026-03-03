import allProjectsLookup from "./allProjectsLookup.js"
import { 
    toggleCompleteStatusHandler, 
    viewDetailsHandler, 
    removeToDoItemHandler 
} from "./toDoItemButtonHandlers.js"

import { createToDoItemEditDialog, createMoveToOtherProjectDialog } from "./toDoItemCardComponentFactories.js"
import { updateMoveToOtherProjectDialog } from "./dialogUpdaters.js"

const createToDoItemCard = function (itemID = crypto.randomUUID()){
    let div = document.createElement("div");
    div.dataset.itemID = itemID;
    let toDoItem = allProjectsLookup.getToDoItemByID(itemID)

    let title = document.createElement("h4");
    let isComplete = document.createElement("em");
    let dueDate = document.createElement("p");
    let priority = document.createElement("p");
    let details = document.createElement("div");
    let editDialog = createToDoItemEditDialog(toDoItem);
    let moveToOtherProjectDialog = createMoveToOtherProjectDialog(toDoItem);
    
    div.classList.add("toDoItemCard");
    
    title.classList.add("title");
    isComplete.classList.add("isComplete");
    dueDate.classList.add("dueDate");
    priority.classList.add("priority");
    details.classList.add("details");

    title.textContent = "Untitled";
    isComplete.textContent = "Not completed";
    dueDate.textContent = Date.now();
    priority.textContent = 99;

    // Buttons:
    let toggleCompleteButton = document.createElement("button");
    toggleCompleteButton.textContent = "Toggle Completion Status";
    toggleCompleteButton.addEventListener("click", toggleCompleteStatusHandler);
    toggleCompleteButton.classList.add("editButton");

    let viewDetailsButton = document.createElement("button");
    viewDetailsButton.textContent = "View details";
    viewDetailsButton.addEventListener("click", viewDetailsHandler);

    let openEditDialogButton = document.createElement("button");
    openEditDialogButton.textContent = "Edit To-Do";
    openEditDialogButton.addEventListener("click", () => {
        editDialog.showModal();
    });
    openEditDialogButton.classList.add("editButton");

    let removeToDoItemButton = document.createElement("button");
    removeToDoItemButton.textContent = "Remove To-do";
    removeToDoItemButton.addEventListener("click", removeToDoItemHandler);
    removeToDoItemButton.classList.add("removeButton");

    let moveToOtherProjectButton = document.createElement("button");
    moveToOtherProjectButton.textContent = "Move to other project";
    moveToOtherProjectButton.addEventListener("click", () => {
        // Need to update the select element within moveToOtherProjectDialog
        // So that the dialog gets the latest list of other projects in the drop down
        updateMoveToOtherProjectDialog(moveToOtherProjectDialog, toDoItem);
        moveToOtherProjectDialog.showModal();
    });
    moveToOtherProjectButton.classList.add("editButton");


    for (const element of [
        title, 
        isComplete, 
        dueDate, 
        priority, 
        viewDetailsButton,
        toggleCompleteButton,
        openEditDialogButton,
        moveToOtherProjectButton,
        removeToDoItemButton,
        editDialog,
        moveToOtherProjectDialog,
        details
    ]){
        div.appendChild(element);
    }
    return div;
}

export {
    createToDoItemCard
}