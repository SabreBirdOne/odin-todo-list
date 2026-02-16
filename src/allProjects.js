let allProjects = [];

function getProjectByID(searchID){
    // same as an Array.prototype.find call with dataset.
    return allProjects.find((element) => element.id === searchID.toString())
}

export {
    allProjects,
    getProjectByID,
}