const createToDoItemCard = function (itemID = crypto.randomUUID()){
    let div = document.createElement("div");
    div.dataset.itemID = itemID;

    let title = document.createElement("h4");
    let dueDate = document.createElement("p");
    let priority = document.createElement("p");
    
    div.classList.add("toDoItemCard");
    title.classList.add("title");
    dueDate.classList.add("dueDate");
    priority.classList.add("priority");

    title.textContent = "Untitled";
    dueDate.textContent = Date.now();
    priority.textContent = 99;

    for (const element of [title, dueDate, priority]){
        div.appendChild(element);
    }
    return div;
}

const createProjectCard = function (itemID = crypto.randomUUID()){
    let div = document.createElement("div");
    div.dataset.itemID = itemID;

    let name = document.createElement("h3");
    let description = document.createElement("p");
    let toDoItemCards = document.createElement("div");
    
    div.classList.add("projectCard");
    name.classList.add("name");
    description.classList.add("description");
    toDoItemCards.classList.add("toDoItemCards");
      
    for (const element of [name, description, toDoItemCards]){
        div.appendChild(element);
    }
    return div;
}

export {
    createToDoItemCard, createProjectCard
}