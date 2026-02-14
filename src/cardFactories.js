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

    for (const element of [title, dueDate, priority]){
        div.appendChild(element);
    }
    return div;
}

export {
    createToDoItemCard
}