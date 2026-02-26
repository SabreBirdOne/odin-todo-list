import ToDoItem from "./toDoItem";
import { createToDoItemCard } from "./toDoItemCardFactories";
import { updateToDoItemCard } from "./toDoItemCardUpdaters";
import allProjectsLookup from "./allProjectsLookup";
import allProjectsManager from "./allProjectsManager";
import projectManager from "./projectManager";

function newBlankToDoItemHandler(event){
    // Creates the new ToDoItem
    let newToDoItem = new ToDoItem();

    // Add the new ToDoItem to the Project
    const targetProjectID = event.target.parentNode.dataset.itemID;
    let targetProject = allProjectsLookup.getProjectByID(targetProjectID);
    projectManager.addToDoToProject(targetProject, newToDoItem)

    // Create the new ToDoItemCard
    let newToDoItemCard = createToDoItemCard(newToDoItem.id);
    updateToDoItemCard(newToDoItem, newToDoItemCard);

    // Add to the div.toDoItemCards
    let toDoItemCardsDiv = event.target.parentNode.querySelector(".toDoItemCards")
    toDoItemCardsDiv.appendChild(newToDoItemCard);
}

function removeProjectHandler(event){
    let projectCard = event.target.parentNode;
    let project = allProjectsLookup.getProjectByID(projectCard.dataset.itemID);

    allProjectsManager.removeProject(project);
    
    let allProjectsDiv = projectCard.parentNode;
    allProjectsDiv.removeChild(projectCard);    
}

export {
    newBlankToDoItemHandler,
    removeProjectHandler
}