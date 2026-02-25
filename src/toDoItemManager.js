const toDoItemManager = (function(){
    const toggleCompletionStatus = function(toDoItem){
        toDoItem.isComplete = !toDoItem.isComplete;
        // Need to update local storage 
        console.log("Will update local storage for toDoItem:");
        console.log(toDoItem);
    };

    const updateToDoItem = function (toDoItem, args){
        // args: object literal with key-value pairs, mass-updating toDoItem.
        for(const key of Object.keys(args)){
            if(args[key] && Object.hasOwn(toDoItem, key)){
                toDoItem[key] = args[key];
            }
        }
        // Need to update local storage
        console.log("Will update local storage for toDoItem:");
        console.log(toDoItem);
    }


    return {
        toggleCompletionStatus,
        updateToDoItem
    }
})()

export default toDoItemManager