import { format } from "date-fns";

export default class ToDoItemCard {
    constructor(itemID = crypto.randomUUID()){
        this.div = document.createElement("div");
        this.div.dataset.itemID = itemID;

        let title = document.createElement("h4");
        let dueDate = document.createElement("p");
        let priority = document.createElement("p");
        
        this.div.classList.add("toDoItemCard");
        title.classList.add("title");
        dueDate.classList.add("dueDate");
        priority.classList.add("priority");

        for (const element of [title, dueDate, priority]){
            this.div.appendChild(element);
        }
    }

    updateCard(toDoItem){
        this.div.dataset.itemID = toDoItem["id"];
        this.div.querySelector(".title").textContent = `Title: ${toDoItem["title"]}`;
        this.div.querySelector(".dueDate").textContent = `Due Date: ${format(toDoItem["dueDate"], "yyyy-MM-dd H:m:s")}`;
        this.div.querySelector(".priority").textContent = `Priority: ${toDoItem["priority"]}`;
    }
}