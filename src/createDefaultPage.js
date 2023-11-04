import {createProjectWindow} from "./createProjectWindow";
import {createProject} from './createProject';

export const createDefaultPage = () => {
    const divProjects = document.createElement('div');
    const divSN = document.createElement('div');

    function createMainPage() {
        divProjects.id = 'divProjects';
        divSN.id = 'divSN';
    
        const contentDiv = document.getElementById('content');
    
        contentDiv.appendChild(divProjects);
        contentDiv.appendChild(divSN);
    }
    
    createMainPage();
    createProjectWindow(divProjects);
}
