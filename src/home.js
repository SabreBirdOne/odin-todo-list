import createDefaultProject from "./defaultProjectFactories.js";
import allProjectsManager from "./allProjectsManager.js";

import { createProjectCard } from "./projectCardFactories.js";
import { updateProjectCard } from "./projectCardUpdaters.js";
import { createNewProjectDialog } from "./homePageComponentFactories.js";

export default function loadHomePage(){
    // init data:
    let projectNemo = createDefaultProject();
    allProjectsManager.addNewProject(projectNemo);

    /* new project dialog */
    const newProjectDialog = createNewProjectDialog();

    /* New Project button */
    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = "New Project";
    newProjectButton.id = "newProjectButton";
    
    // Add event listeners here
    newProjectButton.addEventListener("click", () => {
        newProjectDialog.showModal();
    });

    /* All Projects header */
    const allProjectsHeader = document.createElement("h1");
    allProjectsHeader.textContent = "All Projects";

    /* All Projects div */
    const allProjectsDiv = document.createElement("div");
    allProjectsDiv.id = "allProjectsDiv";

    let projectNemoCard = createProjectCard(projectNemo.id);
    updateProjectCard(projectNemo, projectNemoCard);
    allProjectsDiv.appendChild(projectNemoCard);

    /* Add every element into body */
    const body = document.querySelector("body");
    for (const element of [
        newProjectButton,
        newProjectDialog,
        allProjectsHeader,
        allProjectsDiv,
    ]){
        body.appendChild(element);
    }
}