const projectManager = (function (){
    const removeToDoFromProject = function(project, toDoItem){
        const indexToRemove = project.toDoItems.findIndex((element) => element.id === toDoItem.id.toString());
        if (indexToRemove > -1){
            project.toDoItems.splice(indexToRemove, 1);
        }
        // Add code for (updating local storage) here.
    }

    const addToDoToProject = function(project, toDoItem){
        project.toDoItems.push(toDoItem);
        // Add code for (updating local storage) here.
    }

    return {
        removeToDoFromProject,
        addToDoToProject
    }
})();

export default projectManager;