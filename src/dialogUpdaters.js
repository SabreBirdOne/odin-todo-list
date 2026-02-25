import { allProjects, getProjectByToDoItemID } from "./allProjects.js";

function updateMoveToOtherProjectDialog(dialog, toDoItem){
    let projectOfMovedToDo = getProjectByToDoItemID(toDoItem.id);
    let select = dialog.querySelector("select");
    while (select.firstChild){
        select.removeChild(select.firstChild);
    }

    if (projectOfMovedToDo.id){
        for (const otherProject of allProjects){
            let newOption = document.createElement("option");
            newOption.value = otherProject.id;
            if (otherProject.id !== projectOfMovedToDo.id){
                newOption.textContent = otherProject.name;
            }
            else {
                newOption.textContent = "Current Project";
            } 
            select.appendChild(newOption);    
        }
    }
}

export {
    updateMoveToOtherProjectDialog
}