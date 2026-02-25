import { createCheckListLine, createAddToChecklistDialog} from "./checklistComponentFactories.js"
import { updateToDoItemCard } from "./toDoItemCardUpdaters.js";
import { createDialogButtonDiv } from "./otherHTMLFactories.js";

import { allProjects, getProjectByID, getProjectByToDoItemID } from "./allProjects.js";
import projectManager from "./projectManager.js";
import toDoItemManager from "./toDoItemManager.js";
import { updateProjectCard } from "./projectCardUpdaters.js";


function populateChecklistElement(toDoItem, targetDiv){
    for (let [checklistItem, isItemCompleted] of Object.entries(toDoItem.checklist)){
        const checklistLine = createCheckListLine(checklistItem, isItemCompleted);
        targetDiv.appendChild(checklistLine);
    }
}

function populateDetailsDiv(toDoItem, detailsDiv){
    let descriptionHeader       = document.createElement("h5");
    let description             = document.createElement("p");
    let notesHeader             = document.createElement("h5");
    let notes                   = document.createElement("p");
    let checklistHeader         = document.createElement("h5");
    let addToChecklistDialog    = createAddToChecklistDialog(toDoItem);
    let checklist               = document.createElement("ul");

    description.classList.add("description");
    notes.classList.add("notes");

    descriptionHeader.textContent   = "Description";
    description.textContent         = toDoItem.description;
    notesHeader.textContent         = "Notes";
    notes.textContent               = toDoItem.notes;
    checklistHeader.textContent     = "Checklist";

    let openAddToChecklistDialogButton = document.createElement("button");
    openAddToChecklistDialogButton.textContent = "Add";
    openAddToChecklistDialogButton.addEventListener("click", () => {
        addToChecklistDialog.showModal();
    });

    // Build checklist
    populateChecklistElement(toDoItem, checklist);

    for (const element of [
        descriptionHeader,
        description,
        notesHeader,
        notes,
        checklistHeader,
        openAddToChecklistDialogButton,
        addToChecklistDialog,
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
    let submitValue = "save";
    let buttonsDiv = createDialogButtonDiv(submitValue);
    let saveButton = buttonsDiv.querySelector(".submitButton");
    
    saveButton.addEventListener("click", (event) => {
        event.preventDefault();
        returnDialog.close(submitValue);
    });

    returnDialog.addEventListener("close", (event) => {
        if (returnDialog.returnValue === submitValue){
            // Assign form values to the toDoItem and actually edit it here
            const toDoItemArgs = returnDialog.querySelectorAll("input");
            const elementsToUpdate = {
                "title": toDoItemArgs[0].value,
                "description": toDoItemArgs[1].value,
                "dueDate": toDoItemArgs[2].value,
                "priority": toDoItemArgs[3].valueAsNumber,
                "notes": toDoItemArgs[4].value
            }

            toDoItemManager.updateToDoItem(toDoItem, elementsToUpdate);
            
            // update the toDoItemCard too after editting toDoItem
            let toDoItemCard = document.querySelector(
                `div.toDoItemCard[data-item-i-d = "${toDoItem.id}"]`
            );
            updateToDoItemCard(toDoItem, toDoItemCard);
        }
    });

    returnDialogForm.appendChild(buttonsDiv);
    returnDialog.appendChild(returnDialogForm);

    return returnDialog;
}

function createMoveToOtherProjectDialog(toDoItem){
    // need a dialog with a drop down listing all projects to move to.
    let dialog = document.createElement("dialog");
    let dialogForm = document.createElement("form");

    let label = document.createElement("label");
    label.htmlFor = "name";
    label.textContent = "Selet project to move to-do item to:";

    /*  This select element needs to be updated by the button calling 
        showModal on this dialog after construction. */
    let select = document.createElement("select");

    let submitValue = "moveToDo";
    let buttonsDiv = createDialogButtonDiv(submitValue, undefined, "Move to-do");
    let moveToDoButton = buttonsDiv.querySelector(".submitButton");

    moveToDoButton.addEventListener("click", (event) => {
        event.preventDefault();
        dialog.close(submitValue);
    });

    dialog.addEventListener("close", (event) => {
        if (dialog.returnValue === submitValue){
            let sourceProject = getProjectByToDoItemID(toDoItem.id);
            const destinationProjectID = dialog.querySelector("select").value;

            if (sourceProject.id !== destinationProjectID){
                let destinationProject = getProjectByID(destinationProjectID);
                projectManager.addToDoToProject(destinationProject, toDoItem);
                projectManager.removeToDoFromProject(sourceProject, toDoItem);

                for (const project of [sourceProject, destinationProject]){
                    let projectCard = document.querySelector(
                        `div.projectCard[data-item-i-d = "${project.id}"]`
                    );
                    updateProjectCard(project, projectCard);
                }
            }

        }
    });
    for (const element of [label, select, buttonsDiv]){
        dialogForm.appendChild(element);
    }
    
    dialog.appendChild(dialogForm);
    return dialog;
}

export {
    populateDetailsDiv, createToDoItemEditDialog, createMoveToOtherProjectDialog
}