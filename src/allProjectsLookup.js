import allProjects from "./allProjects";

const allProjectsLookup = (function(){
    const getProjectByID = function(searchID){
        // same as an Array.prototype.find call with dataset.
        return allProjects.find((element) => element.id === searchID.toString())
    };
    
    const getToDoItemByID = function(searchID){
        for (const project of allProjects){
            let toDoItemSearchResult = project.toDoItems.find(
                (element) => element.id === searchID.toString()
            );
            if (toDoItemSearchResult) return toDoItemSearchResult;
        }
        return undefined;
    }
    
    const getProjectByToDoItemID = function(searchID){
        for (const project of allProjects){
            let toDoItemSearchResult = project.toDoItems.find(
                (element) => element.id === searchID.toString()
            );
            if (toDoItemSearchResult) return project;
        }
        return undefined;
    }

    const getAllProjects = function(){
        return allProjects;
    }

    return {
        getProjectByID, getToDoItemByID, getProjectByToDoItemID, getAllProjects
    };
})();

export default allProjectsLookup;