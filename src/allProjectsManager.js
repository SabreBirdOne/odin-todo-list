import allProjects from "./allProjects";

const allProjectsManager = (function(){
    const addNewProject = function(newProject){
        allProjects.push(newProject);
        // Update local storage
        console.log("Will Update local storage with this new project:");
        console.log(newProject);
    }

    const removeProject = function(project){
        const indexToRemove = allProjects.findIndex(
            (element) => element.id === project.id.toString()
        );
        if (indexToRemove > -1){
            allProjects.splice(indexToRemove, 1);
            
            console.log("Will update local storage with allProjects:");
            console.log(allProjects);
        }
    }
    
    return {
        addNewProject,
        removeProject
    }
})();

export default allProjectsManager