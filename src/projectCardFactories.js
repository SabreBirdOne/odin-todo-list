const createProjectCard = function (itemID = crypto.randomUUID()){
    let div = document.createElement("div");
    div.dataset.itemID = itemID;

    let name = document.createElement("h3");
    let description = document.createElement("p");
    
    // buttons
    let newBlankToDoItemButton = document.createElement("button");
    newBlankToDoItemButton.textContent = "New Blank To-do";
    newBlankToDoItemButton.addEventListener("click", function(){
        console.log("newBlankToDoItemButton clicked");
    });

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
        toDoItemCards
    ]){
        div.appendChild(element);
    }
    return div;
}

export {
    createProjectCard
}