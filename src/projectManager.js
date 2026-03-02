import localStorageManager from "./localStorageManager";

const projectManager = (function (){
    const removeToDoFromProject = function(project, toDoItem){
        const indexToRemove = project.toDoItems.findIndex((element) => element.id === toDoItem.id.toString());
        if (indexToRemove > -1){
            project.toDoItems.splice(indexToRemove, 1);
            localStorageManager.updateAllProjectsInLocalStorage();
        }
    }

    const addToDoToProject = function(project, toDoItem){
        project.toDoItems.push(toDoItem);
        localStorageManager.updateAllProjectsInLocalStorage();
    }

    return {
        removeToDoFromProject,
        addToDoToProject
    }
})();

export default projectManager;