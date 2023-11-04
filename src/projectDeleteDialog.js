export const projectDeleteDialog = (projectButton, deleteButton) => {
    const dialog = document.createElement('dialog');
    const p = document.createElement('p');
    const form = document.createElement('form');
    const cancelButton = document.createElement('button');
    const confirmButton = document.createElement('button');
    const buttons = document.createElement('div');

    dialog.id = 'newProject';
    p.innerHTML = `Are you sure you want to delete the ${projectButton.querySelector('p').innerHTML}?`;
    cancelButton.value = 'cancel';
    cancelButton.formMethod = 'dialog';
    cancelButton.innerHTML = 'Cancel';
    confirmButton.id = 'confirmBtn';
    confirmButton.value = 'default';
    confirmButton.innerHTML = 'Confirm';
    
    projectButton.parentNode.parentNode.append(dialog);
    dialog.append(p);
    dialog.append(form);
    form.append(buttons);
    buttons.append(confirmButton);
    buttons.append(cancelButton);

    deleteButton.addEventListener('click', () => {
        dialog.showModal();
        console.log(projectButton);
    })

    confirmButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.close(confirmButton.value);
        projectButton.removeChild(deleteButton);
        projectButton.parentNode.removeChild(projectButton);

    })
}