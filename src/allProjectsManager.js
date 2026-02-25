import allProjects from "./allProjects";

const allProjectsManager = (function(){
    const addNewProject = function(newProject){
        allProjects.push(newProject);
        // Update local storage
        console.log("Will Update local storage with this new project:");
        console.log(newProject);
    }
    
    return {
        addNewProject
    }
})();

export default allProjectsManager