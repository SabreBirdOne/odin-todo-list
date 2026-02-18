function toggleCompleteStatusHandler(event){
    // Need to find toToItem data object and toggle its completion status too.
    let toDoItem = undefined;

    let isCompleteElement = event.target.parentNode.querySelector("em.isComplete");
    console.log(isCompleteElement);
    isCompleteElement.textContent = toDoItem.isComplete ? "Completed" : "Not Completed";
}

export {toggleCompleteStatusHandler}