export default function loadHomePage(){

    /* New Project button */
    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = "New Project";
    newProjectButton.id = "newProjectButton";
    
    // Add event listeners here


    /* All Projects header */
    const allProjectsHeader = document.createElement("h1");
    allProjectsHeader.textContent = "All Projects";

    /* All Projects div */
    const allProjectsDiv = document.createElement("div");
    allProjectsDiv.id = "allProjectsDiv";

    /* Add every element into body */
    const body = document.querySelector("body");
    for (const element of [
        newProjectButton,
        allProjectsHeader,
        allProjectsDiv,
    ]){
        body.appendChild(element);
    }
}