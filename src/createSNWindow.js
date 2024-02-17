import { createSN } from "./createSN";
import { createLeftScroll } from "./createLeftScroll";
import { createRightScroll } from "./createRightScroll";
import { createNewProjectButton } from "./createNewProjectButton";

export const createSNWindow = (projectId) => {
    const divSN = document.getElementById('divSN');
    const snWindow = document.createElement('div');
    snWindow.id = projectId;
    divSN.appendChild(snWindow);
    const stickyNoteObject = {
        title: "Title",
        description: "Description",
        notes: "Notes",
        priority: 1,
        dueDate: "Due Date",
    }
    createLeftScroll(divSN.firstChild);
    createRightScroll(divSN.firstChild);
    createSN(snWindow, stickyNoteObject);
    createSN(snWindow, stickyNoteObject);
    createSN(snWindow, stickyNoteObject);
    createSN(snWindow, stickyNoteObject);
    createSN(snWindow, stickyNoteObject);
    createSN(snWindow, stickyNoteObject);
    createSN(snWindow, stickyNoteObject);
    createSN(snWindow, stickyNoteObject);
    createSN(snWindow, stickyNoteObject);
    createSN(snWindow, stickyNoteObject);
    createNewProjectButton(divSN.firstChild);

}