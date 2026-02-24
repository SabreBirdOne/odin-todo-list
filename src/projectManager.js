const projectManager = (function (){
    const removeToDoFromProject = function(project, toDoItem){
        const indexToRemove = project.toDoItems.findIndex((element) => element.id === toDoItem.id.toString());
        if (indexToRemove > -1){
            project.toDoItems.splice(indexToRemove, 1);
        }
        console.log(project.toDoItems);
    }

    return {
        removeToDoFromProject
    }
})();

export default projectManager;