import {createLeftScroll} from './createLeftScroll';
import {createRightScroll} from './createRightScroll';
import {createNewProjectButton} from './createNewProjectButton';
import {createProject} from './createProject';

export const createProjectWindow = (divProjects) => {
    const projectWindow = document.createElement('div');
    projectWindow.classList.add('projectWindow');
    divProjects.appendChild(projectWindow);
    createLeftScroll(projectWindow);
    createRightScroll(projectWindow);
    createProject('Project1', projectWindow);
    createNewProjectButton(projectWindow);
}
