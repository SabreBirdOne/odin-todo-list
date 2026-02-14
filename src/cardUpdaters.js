import { format } from "date-fns";

const updateToDoItemCard = function (toDoItem, toDoItemCard){
    toDoItemCard.dataset.itemID = toDoItem["id"];
    toDoItemCard.querySelector(".title").textContent = `Title: ${toDoItem["title"]}`;
    toDoItemCard.querySelector(".dueDate").textContent = `Due Date: ${format(toDoItem["dueDate"], "yyyy-MM-dd H:m:s")}`;
    toDoItemCard.querySelector(".priority").textContent = `Priority: ${toDoItem["priority"]}`;
}

export {
    updateToDoItemCard
}