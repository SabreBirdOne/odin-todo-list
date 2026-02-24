const projectManager = (function (){
    const removeToDoFromProject = function(project, toDoItem){
        const indexToRemove = project.toDoItems.findIndex((element) => element === toDoItem);
        if (indexToRemove){
            project.toDoItems.splice(indexToRemove, 1);
        }
        console.log(project.toDoItems);
    }

    return {
        removeToDoFromProject
    }
})();

export default projectManager;