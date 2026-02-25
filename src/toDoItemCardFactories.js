import { getToDoItemByID } from "./allProjects";
import { toggleCompleteStatusHandler, viewDetailsHandler, removeToDoItemHandler } from "./toDoItemButtonHandlers.js"
import { createToDoItemEditDialog, createMoveToOtherProjectDialog } from "./toDoItemCardComponentFactories.js"

const createToDoItemCard = function (itemID = crypto.randomUUID()){
    let div = document.createElement("div");
    div.dataset.itemID = itemID;

    let title = document.createElement("h4");
    let isComplete = document.createElement("em");
    let dueDate = document.createElement("p");
    let priority = document.createElement("p");
    let details = document.createElement("div");
    let editDialog = createToDoItemEditDialog(getToDoItemByID(itemID));
    let moveToOtherProjectDialog = createMoveToOtherProjectDialog(getToDoItemByID(itemID));
    
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

    let viewDetailsButton = document.createElement("button");
    viewDetailsButton.textContent = "View details";
    viewDetailsButton.addEventListener("click", viewDetailsHandler);

    let openEditDialogButton = document.createElement("button");
    openEditDialogButton.textContent = "Edit To-Do";
    openEditDialogButton.addEventListener("click", () => {
        editDialog.showModal();
    });

    let removeToDoItemButton = document.createElement("button");
    removeToDoItemButton.textContent = "Remove To-do Item";
    removeToDoItemButton.addEventListener("click", removeToDoItemHandler);

    let moveToOtherProjectButton = document.createElement("button");
    moveToOtherProjectButton.textContent = "Move to other project";
    moveToOtherProjectButton.addEventListener("click", () => {
        // Need to update the select element within moveToOtherProjectDialog
        // So that the dialog gets the latest list of other projects in the drop down
        moveToOtherProjectDialog.showModal();
    });


    for (const element of [
        title, 
        isComplete, 
        dueDate, 
        priority, 
        toggleCompleteButton,
        viewDetailsButton,
        openEditDialogButton,
        removeToDoItemButton,
        moveToOtherProjectButton,
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