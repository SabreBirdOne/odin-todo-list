import { createToDoItemCard } from "./toDoItemCardFactories.js";
import { updateToDoItemCard } from "./toDoItemCardUpdaters.js";

const updateProjectCard = function(project, projectCard){
    projectCard.dataset.itemID = project.id;
    projectCard.querySelector(".name").textContent = project.name;
    projectCard.querySelector(".description").textContent = project.description;
    
    let toDoItemCards = projectCard.querySelector(".toDoItemCards");
    while (toDoItemCards.firstChild){
        toDoItemCards.removeChild(toDoItemCards.firstChild);
    }

    for (const toDoItem of project.toDoItems){
        const newCard = createToDoItemCard(toDoItem.id);
        updateToDoItemCard(toDoItem, newCard);

        toDoItemCards.appendChild(newCard);
    }
}

export {
    updateProjectCard
}