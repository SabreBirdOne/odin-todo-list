function createDialogButtonDiv(
    submitValue = "submit", 
    cancelValue = "cancel",
    submitButtonText = "Submit",
    cancelButtonText = "Cancel"
){
    // Buttons with no event handlers attached
    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttonsDiv");

    let cancelButton = document.createElement("button");
    cancelButton.classList.add("cancelButton");
    cancelButton.formMethod = "dialog";
    cancelButton.textContent = cancelButtonText;
    cancelButton.value = cancelValue;

    let submitButton = document.createElement("button");
    submitButton.classList.add("submitButton");
    submitButton.id = "submitButton";
    submitButton.textContent = submitButtonText;
    submitButton.value = submitValue;

    buttonsDiv.appendChild(cancelButton);
    buttonsDiv.appendChild(submitButton);

    return buttonsDiv;
}

export { createDialogButtonDiv }