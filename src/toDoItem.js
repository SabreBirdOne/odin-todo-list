export default class ToDoItem {
    constructor(
        title = "Untitled", 
        description = "None", 
        dueDate = Date.now(), 
        priority = 99,
        notes = "None",
        checklist = {},
        isComplete = false,
        toDoItemID = crypto.randomUUID(),
    )
        /* REQUIRES: checklist is an object with key value pair:
            String checklist-item: Boolean completed
        */
    
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.isComplete = isComplete;
        this.id = toDoItemID;
    }
}

