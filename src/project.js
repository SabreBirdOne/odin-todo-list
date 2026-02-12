export default class Project {
    constructor(
        name = crypto.randomUUID(),
        toDoItems = []
    ){
        this.name = name;
        this.toDoItems = toDoItems;
    }
}