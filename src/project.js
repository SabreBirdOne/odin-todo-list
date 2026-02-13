export default class Project {
    constructor(
        name = "Unnamed Project",
        toDoItems = [],
        projectID = crypto.randomUUID(),
    ){
        this.name = name;
        this.toDoItems = toDoItems;
        this.id = projectID;
    }
}