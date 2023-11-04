import { createSNWindow } from './createSNWindow';
import {projectDeleteButton} from './projectDeleteButton';

export const createProject = (name, projectWindow) => {
    let lastProjectNumber;
    let projectNumber;
    const projectButton = document.createElement('button');
    const projectButtonName = document.createElement('p');
    projectButtonName.innerHTML = name;
    projectButton.classList.add('cover');

    if(projectWindow.childElementCount >= 1) {
        lastProjectNumber = projectWindow.lastChild.id.substring(1);
    }

    let projectCount = projectWindow.childElementCount;
    projectButton.id = "P" + projectCount;

    if(projectWindow.childElementCount >= 1) {
        projectNumber = parseInt(lastProjectNumber) + 1;
        projectButton.id = "P" + projectNumber;
    }
    
    projectWindow.appendChild(projectButton);
    projectButton.appendChild(projectButtonName);
    const projectButtonArray = projectWindow.querySelectorAll('button');

    projectButtonArray.forEach(e => {
        e.addEventListener('click', () => {
            switch (e.id) {
                case `P${projectNumber}`:
                case `P${projectCount}`:
                    e.style.backgroundColor = '#808080';
                    console.log(e);
                    e.classList.remove('hidden');
                    if(e.childNodes.length < 2) {
                        projectDeleteButton(e, true);
                    }
                    createSNWindow();
                    break;
            
                default:
                    break;
            }

            projectButtonArray.forEach(element => {
                if(element != e) {
                    element.classList.add('hidden');
                }
            });
            
            projectButtonArray.forEach(e => {
                if (e.classList.contains('hidden')) {
                    e.style.backgroundColor = '#F0F0F0';
                    if(e.childNodes.length > 1) {
                        projectDeleteButton(e, false);
                    }
                }
            })
        })
    });
}