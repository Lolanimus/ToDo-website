import {createProjectWindow} from "./createProjectWindow";
import {createProject} from './createProject';

export const createDefaultPage = () => {
    const divProjects = document.createElement('div');
    const divSN = document.createElement('div');

    function createMainPage() {
        divProjects.classList.add('divProjects');
        divSN.classList.add('divSN');
    
        const contentDiv = document.getElementById('content');
    
        contentDiv.appendChild(divProjects);
        contentDiv.appendChild(divSN);
    }
    
    createMainPage();
    createProjectWindow(divProjects);
}
