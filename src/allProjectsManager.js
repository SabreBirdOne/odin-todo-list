import allProjects from "./allProjects";
import localStorageManager from "./localStorageManager";

const allProjectsManager = (function(){
    const addNewProject = function(newProject){
        allProjects.push(newProject);
        
        localStorageManager.updateAllProjectsInLocalStorage();
    }

    const removeProject = function(project){
        const indexToRemove = allProjects.findIndex(
            (element) => element.id === project.id.toString()
        );
        if (indexToRemove > -1){
            allProjects.splice(indexToRemove, 1);
            
            localStorageManager.updateAllProjectsInLocalStorage();
        }
    }
    
    return {
        addNewProject,
        removeProject
    }
})();

export default allProjectsManager