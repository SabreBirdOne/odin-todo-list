import {newBlankProjectHandler} from "./homeButtonHandlers.js"

export default function loadHomePage(){

    /* New Project button */
    const newBlankProjectButton = document.createElement("button");
    newBlankProjectButton.textContent = "New Blank Project";
    newBlankProjectButton.id = "newBlankProjectButton";
    
    // Add event listeners here
    newBlankProjectButton.addEventListener("click", newBlankProjectHandler);


    /* All Projects header */
    const allProjectsHeader = document.createElement("h1");
    allProjectsHeader.textContent = "All Projects";

    /* All Projects div */
    const allProjectsDiv = document.createElement("div");
    allProjectsDiv.id = "allProjectsDiv";

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