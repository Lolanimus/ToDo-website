import { projectDeleteDialog } from "./projectDeleteDialog";

export const projectDeleteButton = (button, isToCreate) => {
    if(isToCreate) {
        const deleteButton = document.createElement('button');
        deleteButton.id = button.id + 'delete';
        deleteButton.innerHTML = 'x';
        button.append(deleteButton);
        projectDeleteDialog(button, deleteButton);
    } else {
        const deleteButton = button.querySelector('button');
        button.removeChild(deleteButton);
    }
}