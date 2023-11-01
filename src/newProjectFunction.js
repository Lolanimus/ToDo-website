import { createProject } from "./createProject";

export const newProjectFunction = (newProjectButton, divProjects) => {
    const dialog = document.createElement('dialog');
    const p = document.createElement('p');
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const cancelButton = document.createElement('button');
    const confirmButton = document.createElement('button');
    const buttons = document.createElement('div');

    dialog.id = 'newProject';
    p.innerHTML = "Write the project's name";
    cancelButton.value = 'cancel';
    cancelButton.formMethod = 'dialog';
    cancelButton.innerHTML = 'Cancel';
    confirmButton.id = 'confirmBtn';
    confirmButton.value = 'default';
    confirmButton.innerHTML = 'Confirm';
    label.htmlFor = 'name';
    input.type = 'text';
    input.htmlFor = 'name';
    input.id = 'name';
    
    divProjects.append(dialog);
    dialog.append(p);
    dialog.append(form);
    form.append(label);
    form.append(input);
    form.append(buttons);
    buttons.append(confirmButton);
    buttons.append(cancelButton);

    newProjectButton.addEventListener('click', () => {
        dialog.showModal();
    })

    input.addEventListener('change', () => {
        confirmButton.value = input.value;
    })

    confirmButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.close(confirmButton.value);
        createProject(confirmButton.value, divProjects);
        input.value = '';
    })
} 