export const createDeleteButton = (button) => {
    const deleteButton = document.createElement('button');
    deleteButton.id = button.id + 'delete';
    deleteButton.innerHTML = 'x';
    button.append(deleteButton);
}