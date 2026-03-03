import createDefaultProject from "./defaultProjectFactories.js";
import allProjectsManager from "./allProjectsManager.js";
import allProjectsLookup from "./allProjectsLookup.js";
import localStorageManager from "./localStorageManager.js";

import { createProjectCard } from "./projectCardFactories.js";
import { updateProjectCard } from "./projectCardUpdaters.js";
import { createNewProjectDialog } from "./homePageComponentFactories.js";

export default function loadHomePage(){
    // init data:
    localStorageManager.loadAllProjectsFromLocalStorage();
    const emptyLocalStorage = allProjectsLookup.getAllProjects().length === 0;

    /* new project dialog */
    const newProjectDialog = createNewProjectDialog();

    /* New Project button */
    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = "New Project";
    newProjectButton.classList.add("createButton");
    
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

    // If nothing in local storage, populate with defaults
    if (emptyLocalStorage){
        let projectNemo = createDefaultProject();
        allProjectsManager.addNewProject(projectNemo);

        let projectNemoCard = createProjectCard(projectNemo.id);
        updateProjectCard(projectNemo, projectNemoCard);
        allProjectsDiv.appendChild(projectNemoCard);
    }
    else {
        for (const project of allProjectsLookup.getAllProjects()){
            let newProjectCard = createProjectCard(project.id);
            updateProjectCard(project, newProjectCard);
            allProjectsDiv.appendChild(newProjectCard);
        }
    }
    

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