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

    const renameCheckListItem = function (toDoItem, oldItemName, newItemName){
        if (_hasCheckListItem(toDoItem, oldItemName) 
            && !_hasCheckListItem(toDoItem, newItemName)){
            toDoItem.checklist[newItemName] = toDoItem.checklist[oldItemName];
            delete toDoItem.checklist[oldItemName];
        }
    }

    return {
        addCheckListItem, 
        toggleCheckListItem, 
        removeCheckListItem,
        renameCheckListItem
    };
})();

export default checkListManager;