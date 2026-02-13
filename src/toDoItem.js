class ToDoItem {
    constructor(
        title = "Untitled", 
        description = "None", 
        dueDate = Date.now(), 
        priority = 99,
        notes = "None",
        checklist = {},
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
        this.id = toDoItemID;
    }
}

const checkListManager = (function(){
    // Responsibility: manages ToDoItem's checklist

    const _hasCheckListItem = function (toDoItem, itemName){
        if (toDoItem.checklist) return Object.hasOwn(toDoItem.checklist, itemName);
        return false;
    };

    const addCheckListItem = function (toDoItem, itemName){
        if (!_hasCheckListItem(toDoItem, itemName)){
            toDoItem.checklist[itemName] = false;
        }
    };

    const toggleCheckListItem = function (toDoItem, itemName){
        if (_hasCheckListItem(toDoItem, itemName)){
            toDoItem.checklist[itemName] = !toDoItem.checklist[itemName];
        }
    };

    const removeCheckListItem = function (toDoItem, itemName){
        if (_hasCheckListItem(toDoItem, itemName)){
            delete toDoItem.checklist[itemName];
        }
    };

    return {addCheckListItem, toggleCheckListItem, removeCheckListItem};
})();

export {ToDoItem, checkListManager}