import localStorageManager from "./localStorageManager";

const toDoItemManager = (function(){
    const toggleCompletionStatus = function(toDoItem){
        toDoItem.isComplete = !toDoItem.isComplete;
        localStorageManager.updateAllProjectsInLocalStorage();
    };

    const updateToDoItem = function (toDoItem, args){
        // args: object literal with key-value pairs, mass-updating toDoItem.
        for(const key of Object.keys(args)){
            if(args[key] && Object.hasOwn(toDoItem, key)){
                toDoItem[key] = args[key];
            }
        }
        localStorageManager.updateAllProjectsInLocalStorage();
    }


    return {
        toggleCompletionStatus,
        updateToDoItem
    }
})()

export default toDoItemManager