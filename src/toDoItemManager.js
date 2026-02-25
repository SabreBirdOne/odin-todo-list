const toDoItemManager = (function(){
    const toggleCompletionStatus = function(toDoItem){
        toDoItem.isComplete = !toDoItem.isComplete;
        // Need to update local storage 
    };
    

    return {
        toggleCompletionStatus
    }
})()

export default toDoItemManager