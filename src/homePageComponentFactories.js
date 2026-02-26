import { createDialogButtonDiv } from "./otherHTMLFactories.js";
import Project from "./project.js";
import allProjectsManager from "./allProjectsManager.js";
import { createProjectCard } from "./projectCardFactories.js";
import { updateProjectCard } from "./projectCardUpdaters.js";

function createNewProjectDialog(){
    let dialog = document.createElement("dialog");
    let dialogForm = document.createElement("form");

    for (const [stringField, details] of Object.entries({
        "name": ["Name:", "text"],
        "description": ["Description:", "text"],
    })){
        let label = document.createElement("label");
        label.htmlFor = stringField;
        label.textContent = details[0];
        
        let input = document.createElement("input");
        input.type = details[1];
        input.id = stringField;

        dialogForm.appendChild(label);
        dialogForm.appendChild(input);
    }

    let submitValue = "create";
    let buttonsDiv = createDialogButtonDiv(
        submitValue, undefined, "Create New Project"
    );
    let createButton = buttonsDiv.querySelector(".submitButton");

    createButton.addEventListener("click", (event) => {
        event.preventDefault();
        dialog.close(submitValue);
    });

    dialog.addEventListener("close", () => {
        if (dialog.returnValue === submitValue){
            const newProjectArgs = dialog.querySelectorAll("input");
            if (!newProjectArgs[0].value) {
                newProjectArgs[0].value = "Unnamed Project";
            }
            if (!newProjectArgs[1].value){
                newProjectArgs[1].value = "None"
            }

            const newProject = new Project(
                newProjectArgs[0].value, newProjectArgs[1].value
            );
            allProjectsManager.addNewProject(newProject);
            
            let newProjectCard = createProjectCard(newProject.id);
            updateProjectCard(newProject, newProjectCard);

            const body = dialog.parentNode;
            let allProjectsDiv = body.querySelector("#allProjectsDiv");
            allProjectsDiv.appendChild(newProjectCard);
        }
    });
    
    dialogForm.appendChild(buttonsDiv);
    dialog.appendChild(dialogForm);
    return dialog;
}

export {
    createNewProjectDialog
}