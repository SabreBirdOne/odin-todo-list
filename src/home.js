import createDefaultProject from "./defaultProjectFactories.js";
import allProjectsManager from "./allProjectsManager.js";
import { createProjectCard } from "./projectCardFactories.js";
import { updateProjectCard } from "./projectCardUpdaters.js";

export default function loadHomePage(){
    // init data:
    let projectNemo = createDefaultProject();
    allProjectsManager.addNewProject(projectNemo);

    /* New Project button */
    const newBlankProjectButton = document.createElement("button");
    newBlankProjectButton.textContent = "New Blank Project";
    newBlankProjectButton.id = "newBlankProjectButton";
    
    // Add event listeners here
    newBlankProjectButton.addEventListener("click", ()=>{});


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
        newBlankProjectButton,
        allProjectsHeader,
        allProjectsDiv,
    ]){
        body.appendChild(element);
    }
}