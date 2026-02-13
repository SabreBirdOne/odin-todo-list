export default class Project {
    constructor(
        name = "Unnamed Project",
        description = "None",
        toDoItems = [],
        projectID = crypto.randomUUID(),
    ){
        this.name = name;
        this.description = description;
        this.toDoItems = toDoItems;
        this.id = projectID;
    }
}