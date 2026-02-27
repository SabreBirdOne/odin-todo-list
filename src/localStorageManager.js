import allProjects from "./allProjects";
import ToDoItem from "./toDoItem";
import Project from "./project";

const localStorageManager = (function (){
    const updateAllProjectsInLocalStorage = function(){
        localStorage.setItem("allProjects", JSON.stringify(allProjects));
    }

    const loadAllProjectsFromLocalStorage = function(){
        const loadedFromStorage = JSON.parse(localStorage.getItem("allProjects"));
        
        if (loadedFromStorage){
            /* After JSON.parse, the data is stored as object literals
                So must convert them back with constructors.
                AOL means As Ojbect Literal
            */
            console.log("localStorage populated")
            for (const projectAOL of loadedFromStorage){
                // Construct the ToDoItem objects first
                let toDoItemsForProject = [];
                for (const toDoItemAOL of projectAOL.toDoItems){
                    let toDoItem = new ToDoItem(
                        toDoItemAOL.title,
                        toDoItemAOL.description,
                        toDoItemAOL.dueDate,
                        toDoItemAOL.priority,
                        toDoItemAOL.notes,
                        toDoItemAOL.checklist,
                        toDoItemAOL.isComplete,
                        toDoItemAOL.id
                    )
                    toDoItemsForProject.push(toDoItem);
                }

                // Construct the Project object 
                let project = new Project(
                    projectAOL.name,
                    projectAOL.description,
                    projectAOL.toDoItems = toDoItemsForProject,
                    projectAOL.id
                )

                // Add Project to allProjects
                allProjects.push(project);
            }
        }
    }

    return {
        updateAllProjectsInLocalStorage,
        loadAllProjectsFromLocalStorage
    }
})();

export default localStorageManager