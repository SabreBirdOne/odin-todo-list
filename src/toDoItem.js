export default class ToDoItem {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = "None";
        this.checklist = {} // String checklist-item: Boolean completed
    }
}