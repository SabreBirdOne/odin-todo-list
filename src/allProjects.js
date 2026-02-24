let allProjects = [];

function getProjectByID(searchID){
    // same as an Array.prototype.find call with dataset.
    return allProjects.find((element) => element.id === searchID.toString())
}

function getToDoItemByID(searchID){
    for (const project of allProjects){
        let toDoItemSearchResult = project.toDoItems.find(
            (element) => element.id === searchID.toString()
        );
        if (toDoItemSearchResult) return toDoItemSearchResult;
    }
    return undefined;
}

function getProjectByToDoItemID(searchID){
    for (const project of allProjects){
        let toDoItemSearchResult = project.toDoItems.find(
            (element) => element.id === searchID.toString()
        );
        if (toDoItemSearchResult) return project;
    }
    return undefined;
}

export {
    allProjects,
    getProjectByID,
    getToDoItemByID,
    getProjectByToDoItemID
}