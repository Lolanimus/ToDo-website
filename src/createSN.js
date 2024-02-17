const expandIcon = require('./arrow-expand.svg');

export const createSN = (snWindow, propertiesObject) => {
    const stickyNote = document.createElement('div');
    const header = document.createElement('div');
    const titleDiv = document.createElement('div');
    const titleP = document.createElement('p');
    const expandButton = document.createElement('button');
    const descrDiv = document.createElement('div');
    const dueDateDiv = document.createElement('div');
    const doneButton = document.createElement('button');

    snWindow.appendChild(stickyNote);
    stickyNote.appendChild(header);
    header.appendChild(titleDiv);
    titleDiv.appendChild(titleP);
    header.appendChild(expandButton);
    stickyNote.appendChild(descrDiv);
    stickyNote.appendChild(dueDateDiv);
    stickyNote.appendChild(doneButton);

    stickyNote.classList.add('stickyNote');
    header.classList.add('headerSN');
    titleDiv.classList.add('titleDivSN');
    titleP.classList.add('titlePSN');
    expandButton.classList.add('expandButtonSN');
    descrDiv.classList.add('descrDivSN');
    dueDateDiv.classList.add('dueDateDivSN');
    doneButton.classList.add('doneButtonSN');

    titleP.innerHTML = propertiesObject.title;
    descrDiv.innerHTML = propertiesObject.description;
    dueDateDiv.innerHTML = propertiesObject.dueDate;

    doneButton.addEventListener('click', e => {
        const stickyNoteDOM = e.target.parentNode;
        stickyNoteDOM.parentNode.removeChild(stickyNoteDOM);
    })
}