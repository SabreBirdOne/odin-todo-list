import { 
    newBlankToDoItemHandler, 
    removeProjectHandler 
} 
from "./projectButtonHandlers";

const createProjectCard = function (itemID = crypto.randomUUID()){
    let div = document.createElement("div");
    div.dataset.itemID = itemID;

    let name = document.createElement("h3");
    let description = document.createElement("p");
    
    // buttons
    let newBlankToDoItemButton = document.createElement("button");
    newBlankToDoItemButton.textContent = "New Blank To-do";
    newBlankToDoItemButton.addEventListener("click", newBlankToDoItemHandler);

    let removeProjectButton = document.createElement("button");
    removeProjectButton.textContent = "Remove Project";
    removeProjectButton.addEventListener("click", removeProjectHandler);

    // the div with all the toDoItems
    let toDoItemCards = document.createElement("div");
    
    div.classList.add("projectCard");
    name.classList.add("name");
    description.classList.add("description");
    toDoItemCards.classList.add("toDoItemCards");
      
    for (const element of [
        name, 
        description, 
        newBlankToDoItemButton, 
        removeProjectButton,
        toDoItemCards
    ]){
        div.appendChild(element);
    }
    return div;
}

export {
    createProjectCard
}