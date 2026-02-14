import { format } from "date-fns";
import { createToDoItemCard } from "./cardFactories.js";

const updateToDoItemCard = function (toDoItem, toDoItemCard){
    toDoItemCard.dataset.itemID = toDoItem.id;
    toDoItemCard.querySelector(".title").textContent = `To Do Title: ${toDoItem["title"]}`;
    toDoItemCard.querySelector(".dueDate").textContent = `Due Date: ${format(toDoItem["dueDate"], "yyyy-MM-dd H:m:s")}`;
    toDoItemCard.querySelector(".priority").textContent = `Priority: ${toDoItem["priority"]}`;
}

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
    updateToDoItemCard, updateProjectCard
}